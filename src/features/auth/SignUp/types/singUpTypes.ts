import type { FormDataField } from 'shared/lib/utils/checkIfExistErrors'

export type SignUpFormType = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}
export type SignUpFormFullType = {
  [K in keyof SignUpFormType]: FormDataField<SignUpFormType[K]>
}
