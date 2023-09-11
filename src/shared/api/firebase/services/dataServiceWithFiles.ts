import {
  addDoc,
  CollectionReference,
  doc,
  documentId,
  updateDoc,
  writeBatch,
} from 'firebase/firestore'
import { FileCollectionType, FileInputType } from 'shared/ui/File'
import { firestoreDb } from '../initFirebase'
import { CollectionBaseType, DataServiceCollectionWithFiles } from '../types/firebaseTypes'
import DataService from './dataService'
import { fileDataService } from './fileDataService'
import { FileStorageService } from './fileStorageService'

class DataServiceWithFiles<
  CreateType extends DataServiceCollectionWithFiles<FileInputType>,
  BaseType extends DataServiceCollectionWithFiles<string> & { uid: string },
> extends DataService<CreateType, BaseType> {
  fileStorage

  constructor(
    collectionReference: CollectionReference<BaseType & CollectionBaseType>,
    fileStorage: FileStorageService,
  ) {
    super(collectionReference)
    this.fileStorage = fileStorage
  }

  createMultipleDocuments = async (
    newDocuments: CreateType[],
    userId: string,
  ): Promise<(BaseType & CollectionBaseType)[]> => {
    const batch = writeBatch(firestoreDb)
    const ids: string[] = await Promise.all(
      newDocuments.map(async ({ files, ...document }) => {
        const docRef = doc(this.collectionReference)

        batch.set(docRef, { ...document, ...this.getCreateExtraData(userId) } as any)
        await this.uploadFiles(files, userId)
        return docRef.id
      }),
    )
    await batch.commit()

    return this.getAllByFieldPath(documentId(), 'in', ids)
  }

  uploadFiles = async (files: FileInputType[], userId: string): Promise<FileCollectionType[]> => {
    if (!files.length) return []
    const uploadedFiles = await this.fileStorage.uploadMultipleFiles(files)
    return fileDataService.createMultipleDocuments(uploadedFiles, userId)
  }

  createDocument = async (
    { files, ...newDocument }: CreateType,
    userId: string,
  ): Promise<BaseType & CollectionBaseType & { files: FileCollectionType[] }> => {
    const uploadedFiles = await this.uploadFiles(files, userId)
    const newDoc = await addDoc(this.collectionReference, {
      ...newDocument,
      ...this.getCreateExtraData(userId),
      files: uploadedFiles.map((file) => file.uid),
    } as any)
    const vehicle = await this.getById(newDoc.id)
    const documentWithFiles = (await this.getWithFiles([vehicle]))[0]
    return documentWithFiles
  }

  editDocument = async (
    { uid, ...document }: CreateType & { uid: string },
    userId: string,
  ): Promise<BaseType & CollectionBaseType & { files: FileCollectionType[] }> => {
    const documentReference = this.getRefById(uid)
    const originalDocument = await this.getById(uid)
    const filesToUpload = document.files.filter(
      (file) => !originalDocument.files.includes(file.uid),
    )
    const filesToDelete = originalDocument.files.filter(
      (file) => !document.files.some((f) => f.uid === file),
    )

    const uploadedFiles = await this.uploadFiles(filesToUpload, userId)
    const uploadedFilesIds = uploadedFiles.map((file) => file.uid)

    const files = [...originalDocument.files, ...uploadedFilesIds].filter(
      (file) => !filesToDelete.includes(file),
    )
    await updateDoc(documentReference, {
      ...document,
      files,
      ...this.getModifiedExtraData(userId),
    })

    const vehicle = await this.getById(uid)
    const documentWithFiles = (await this.getWithFiles([vehicle]))[0]
    return documentWithFiles
  }

  getWithFiles = async (
    documents: (BaseType & CollectionBaseType)[],
  ): Promise<(BaseType & CollectionBaseType & { files: FileCollectionType[] })[]> => {
    const fileIds = documents.reduce((ids, document) => [...ids, ...document.files], [] as string[])

    const files = await fileDataService.getAllByFieldPath(documentId(), 'in', fileIds)
    return documents.map((document) => ({
      ...document,
      files: document.files.map((fileId) => files.find((file) => file.uid === fileId)!),
    }))
  }
}

export default DataServiceWithFiles
