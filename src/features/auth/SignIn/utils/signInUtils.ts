import { ValidationRules } from 'shared/lib/utils/checkIfExistErrors'
import type { SignInFormFullType, SignInFormType } from '../types/signInTypes'

export const getSignInFormValues = ({
  email = '',
  password = '',
}: Partial<SignInFormType>): SignInFormFullType => ({
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
})
