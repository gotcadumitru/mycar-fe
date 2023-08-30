export type SignInFormType = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}
export type SignInFormFullType = {
  [K in keyof SignInFormType]: {
    value: SignInFormType[K]
    errorMessage: string
    isRequired: boolean
  }
}
