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
  BaseType extends DataServiceCollectionWithFiles<FileCollectionType>,
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

  createDocument = async ({ files, ...newDocument }: CreateType): Promise<BaseType> => {
    const uploadedFiles = await this.uploadFiles(files)
    const newDoc = await addDoc(this.collectionReference, {
      ...newDocument,
      files: uploadedFiles.map((file) => file.uid),
    } as any)

    return this.getById(newDoc.id)
  }
}

export default DataServiceWithFiles
