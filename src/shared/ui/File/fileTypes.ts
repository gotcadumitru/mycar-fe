export type FileType = {
  mimetype: string
  name: string
  fileUrl: string
  idFromDrive: string
  size: number
  downloadLink: string
}

export type FileInputType = {
  file: File | string
  name: string
  mimetype: string
  idFromDrive?: string
  size: number
}
