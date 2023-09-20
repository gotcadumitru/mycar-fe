import type { FormDataField } from 'shared/lib/utils/checkIfExistErrors'

export type SignUpFormType = {
  fullName: string
  email: string
  password: string
  confirmPassword: string
}
export type SignUpFormFullType = {
  [K in keyof SignUpFormType]: FormDataField<SignUpFormType[K]>
}
