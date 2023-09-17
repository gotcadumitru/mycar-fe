import type { FormDataField } from 'shared/lib/utils/checkIfExistErrors'

export type SignInFormType = {
  email: string
  password: string
}
export type SignInFormFullType = {
  [K in keyof SignInFormType]: FormDataField<SignInFormType[K]>
}
