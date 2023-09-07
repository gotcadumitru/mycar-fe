import type { Vehicle } from 'enteties/vehicle'
import { VehicleWithFiles } from 'enteties/vehicle/model/types/vehicleTypes'
import { addDoc, CollectionReference, doc, documentId, writeBatch } from 'firebase/firestore'
import DataService from 'shared/api/firebase/services/dataService'
import { fileDataService } from 'shared/api/firebase/services/fileDataService'
import { FileStorageService } from 'shared/api/firebase/services/fileStorageService'
import { FileCollectionType, FileInputType } from 'shared/ui/File'
import { firestoreDb } from '../initFirebase'

type DataServiceCollectionWithFiles<T> = {
  files: T[]
}

class DataServiceWithFiles<
  CreateType extends DataServiceCollectionWithFiles<FileInputType>,
  BaseType extends DataServiceCollectionWithFiles<string>,
> extends DataService<CreateType, BaseType> {
  fileStorage

  constructor(collectionReference: CollectionReference<BaseType>, fileStorage: FileStorageService) {
    super(collectionReference)
    this.fileStorage = fileStorage
  }

  createMultipleDocuments = async (newDocuments: CreateType[]): Promise<BaseType[]> => {
    const batch = writeBatch(firestoreDb)
    const ids: string[] = await Promise.all(
      newDocuments.map(async ({ files, ...document }) => {
        const docRef = doc(this.collectionReference)

        batch.set(docRef, document as any)
        await this.uploadFiles(files)
        return docRef.id
      }),
    )
    await batch.commit()

    return this.getAllByFieldPath(documentId(), 'in', ids)
  }

  uploadFiles = async (files: FileInputType[]): Promise<FileCollectionType[]> => {
    const uploadedFiles = await this.fileStorage.uploadMultipleFiles(files)
    return fileDataService.createMultipleDocuments(uploadedFiles)
  }

  createDocument = async ({
    files,
    ...newDocument
  }: CreateType): Promise<BaseType & { files: FileCollectionType[] }> => {
    const uploadedFiles = await this.uploadFiles(files)
    const newDoc = await addDoc(this.collectionReference, {
      ...newDocument,
      files: uploadedFiles.map((file) => file.uid),
    } as any)
    const vehicle = await this.getById(newDoc.id)
    const documentWithFiles = (await this.getWithFiles([vehicle]))[0]
    return documentWithFiles
  }

  getWithFiles = async (
    documents: BaseType[],
  ): Promise<(BaseType & { files: FileCollectionType[] })[]> => {
    const fileIds = documents.reduce((ids, document) => [...ids, ...document.files], [] as string[])

    const files = await fileDataService.getAllByFieldPath(documentId(), 'in', fileIds)
    return documents.map((document) => ({
      ...document,
      files: document.files.map((fileId) => files.find((file) => file.uid === fileId)!),
    }))
  }
}

export default DataServiceWithFiles
