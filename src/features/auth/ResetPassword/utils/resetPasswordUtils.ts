import { ValidationRules } from 'shared/lib/utils/checkIfExistErrors'
import type { ResetPasswordFormFullType, ResetPasswordFormType } from '../types/resetPasswordTypes'

export const getResetPasswordFormValues = ({
  password = '',
}: Partial<ResetPasswordFormType>): ResetPasswordFormFullType => ({
  password: {
    value: password,
    errorMessage: '',
    validations: [{ rule: ValidationRules.REQUIRED }],
  },
})
