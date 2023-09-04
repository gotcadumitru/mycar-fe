import { toast } from 'react-toastify'
import { ERROR_MESSAGES, TOAST_MESSAGE } from 'shared/defaults/text'
import { FileInputType } from 'shared/ui/File'

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

export type Validations = {
  messageToDisplay?: string
} & (
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
)
export const checkIfExistErrors = <
  T extends FormFieldFullData<number | null | string | boolean | FileInputType[]>,
>(
  formFields: T,
) => {
  let isErrors = false
  const formFieldsWithErrors = structuredClone(formFields)

  Object.keys(formFieldsWithErrors).forEach((key) => {
    const property = formFieldsWithErrors[key as keyof typeof formFieldsWithErrors]

    property.validations.forEach((validationRule) => {
      if (validationRule.rule === ValidationRules.REQUIRED && !property.value) {
        isErrors = true
        property.errorMessage = validationRule.messageToDisplay || ERROR_MESSAGES.REQUIRED_FIELD
      }
      if (
        validationRule.rule === ValidationRules.EQUAL_TO_FIELD &&
        formFieldsWithErrors[validationRule.value].value !== property.value
      ) {
        isErrors = true
        property.errorMessage = validationRule.messageToDisplay || ERROR_MESSAGES.DIFFERENT_VALUES
      }
    })
  })

  if (isErrors) {
    toast.error(TOAST_MESSAGE.PLEASE_REVIEW_FIELDS)
  }
  return {
    isErrors,
    formFieldsWithErrors,
  }
}
