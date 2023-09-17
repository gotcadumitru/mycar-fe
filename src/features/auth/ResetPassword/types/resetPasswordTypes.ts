import type { FormDataField } from 'shared/lib/utils/checkIfExistErrors'

export type ResetPasswordFormType = {
  password: string
}
export type ResetPasswordFormFullType = {
  [K in keyof ResetPasswordFormType]: FormDataField<ResetPasswordFormType[K]>
}
