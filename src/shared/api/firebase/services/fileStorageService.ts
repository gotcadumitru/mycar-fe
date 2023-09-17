import { FullMetadata, getDownloadURL, getMetadata, ref, uploadBytes } from 'firebase/storage'
import type { FileCollectionCreateType, FileInputType } from 'shared/ui/File'
import { v4 } from 'uuid'
import { firebaseStorage as firebaseStorageImport } from '../initFirebase'

export class FileStorageService {
  url

  firebaseStorage

  constructor(url: string) {
    this.firebaseStorage = firebaseStorageImport
    this.url = url
  }

  generateNewUrl = (fileName: string) => `${this.url}/${v4()}_${fileName}`

  uploadMultipleFiles = async (files: FileInputType[]): Promise<FileCollectionCreateType[]> =>
    Promise.all(files.map(this.uploadFile))

  uploadFile = async (file: FileInputType): Promise<FileCollectionCreateType> => {
    const path = this.generateNewUrl(file.name)
    const fileStorageRef = ref(this.firebaseStorage, path)
    await uploadBytes(fileStorageRef, file.file as File)
    const [fileUrl, fileMetadata] = await Promise.all([
      this.getFileUrl(path),
      this.getFileMetadata(path),
    ])

    return {
      name: file.name,
      storagePath: path,
      size: fileMetadata.size,
      mimetype: fileMetadata.contentType || '',
      fileUrl,
    }
  }

  getStorageReference = (path: string) => ref(this.firebaseStorage, path)

  getFileUrl = async (path: string): Promise<string> => {
    const filePathReference = this.getStorageReference(path)
    return getDownloadURL(filePathReference)
  }

  getFileMetadata = async (path: string): Promise<FullMetadata> => {
    const filePathReference = this.getStorageReference(path)
    return getMetadata(filePathReference)
  }
}
