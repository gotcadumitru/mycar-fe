import { ERROR_MESSAGES } from 'shared/defaults/text'
import { ValidationRules } from 'shared/lib/utils/checkIfExistErrors'
import type { SignUpFormFullType, SignUpFormType } from '../types/singUpTypes'

export const getSignUpFormValues = ({
  firstName = '',
  lastName = '',
  email = '',
  password = '',
  confirmPassword = '',
}: Partial<SignUpFormType>): SignUpFormFullType => ({
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
    validations: [
      { rule: ValidationRules.REQUIRED },
      {
        rule: ValidationRules.EQUAL_TO_FIELD,
        value: 'password',
        messageToDisplay: ERROR_MESSAGES.DIFFERENT_PASSWORD,
      },
    ],
  },
})
