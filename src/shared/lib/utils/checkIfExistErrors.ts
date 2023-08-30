import { toast } from 'react-toastify'
import { ERROR_MESSAGES, TOAST_MESSAGE } from 'shared/defaults/text'

export type FormDataField<T> = {
  value: T
  errorMessage: string
  validations: Validations[]
}

export type FormFieldFullData<T> = {
  [K: string]: FormDataField<T>
}

export enum ValidationRules {
  REQUIRED = 'REQUIRED',
  EQUAL_TO_FIELD = 'EQUAL_TO_FIELD',
  MIN_LENGTH = 'MIN_LENGTH',
  MIN_VALUE = 'MIN_VALUE',
}

export type Validations =
  | {
      rule: ValidationRules.REQUIRED
    }
  | {
      rule: ValidationRules.EQUAL_TO_FIELD
      value: string
    }
  | {
      rule: ValidationRules.MIN_LENGTH
      value: number
    }
  | {
      rule: ValidationRules.MIN_VALUE
      value: number
    }
export const checkIfExistErrors = <T extends FormFieldFullData<number | null | string | boolean>>(
  formFields: T,
) => {
  let isErrors = false
  const formFieldsWithErrors = structuredClone(formFields)

  Object.keys(formFieldsWithErrors).forEach((key) => {
    const property = formFieldsWithErrors[key as keyof typeof formFieldsWithErrors]
    const isRequired = property.validations.some(({ rule }) => rule === ValidationRules.REQUIRED)
    if (isRequired && !property.value) {
      isErrors = true
      property.errorMessage = ERROR_MESSAGES.REQUIRED_FIELD
    }
  })

  if (isErrors) {
    toast.error(TOAST_MESSAGE.PLEASE_REVIEW_FIELDS)
  }
  return {
    isErrors,
    formFieldsWithErrors,
  }
}
