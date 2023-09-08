export type FileBaseType = {
  fileUrl: string
  name: string
  mimetype: string
  uid: string
  size: number
}

export type FileInputType = FileBaseType & {
  file: File
}

export type FileCollectionCreateType = Omit<FileBaseType, 'uid'> & {
  storagePath: string
}

export type FileCollectionType = FileCollectionCreateType & {
  uid: string
}
