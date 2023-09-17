import type { FormDataField } from 'shared/lib/utils/checkIfExistErrors'

export type ForgotPasswordFormType = {
  email: string
}
export type ForgotPasswordFormFullType = {
  [K in keyof ForgotPasswordFormType]: FormDataField<ForgotPasswordFormType[K]>
}
