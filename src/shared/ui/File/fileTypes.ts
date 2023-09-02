export type FileInputType = {
  file: File | string
  name: string
  mimetype: string
  id: string
  size: number
}

export type FileType = FileInputType & {
  fileUrl: string
  downloadLink: string
}
