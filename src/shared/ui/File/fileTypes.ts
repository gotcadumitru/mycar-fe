export type FileInputType = {
  file: File
  name: string
  mimetype: string
  id: string
  size: number
}

export type FileType = {
  path: ''
}

export type FileCollectionCreateType = {
  name: string
  size: number
  mimetype: string
  storagePath: string
  fileUrl: string
}

export type FileCollectionType = FileCollectionCreateType & {
  uid: string
}
