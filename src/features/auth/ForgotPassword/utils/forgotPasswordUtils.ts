import { ValidationRules } from 'shared/lib/utils/checkIfExistErrors'
import type {
  ForgotPasswordFormFullType,
  ForgotPasswordFormType,
} from '../types/forgotPasswordTypes'

export const getForgotPasswordFormValues = ({
  email = '',
}: Partial<ForgotPasswordFormType>): ForgotPasswordFormFullType => ({
  email: {
    value: email,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
})
