import type { SignInFormFullType } from '../types/singInTypes'
import { SignInFormType } from '../types/singInTypes'

export const getSignInFormValues = ({
  firstName = '',
  lastName = '',
  email = '',
  password = '',
  confirmPassword = '',
}: Partial<SignInFormType>): SignInFormFullType => ({
  firstName: {
    value: firstName,
    errorMessage: '',
    isRequired: true,
  },
  lastName: {
    value: lastName,
    errorMessage: '',
    isRequired: true,
  },
  email: {
    value: email,
    errorMessage: '',
    isRequired: true,
  },
  password: {
    value: password,
    errorMessage: '',
    isRequired: true,
  },
  confirmPassword: {
    value: confirmPassword,
    errorMessage: '',
    isRequired: true,
  },
})
