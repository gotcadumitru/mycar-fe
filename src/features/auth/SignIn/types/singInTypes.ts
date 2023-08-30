import type { FormDataField } from 'shared/lib/utils/checkIfExistErrors'

export type SignInFormType = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}
export type SignInFormFullType = {
  [K in keyof SignInFormType]: FormDataField<SignInFormType[K]>
}
