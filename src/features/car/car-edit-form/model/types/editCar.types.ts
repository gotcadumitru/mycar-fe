
export type EditCarSliceState = {
  newCarFormData: CarFormDataFullType
}
export type CarFormDataType = {
  name: string
}
export type CarFormDataFullType = {
  [K in keyof CarFormDataType]: {
    value: CarFormDataType[K]
    errorMessage: string
    isRequired: boolean
  }
}
