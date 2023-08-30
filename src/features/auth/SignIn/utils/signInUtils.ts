import { ValidationRules } from 'shared/lib/utils/checkIfExistErrors'
import type { SignInFormFullType, SignInFormType } from '../types/singInTypes'

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
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  lastName: {
    value: lastName,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  email: {
    value: email,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  password: {
    value: password,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
  confirmPassword: {
    value: confirmPassword,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
})
