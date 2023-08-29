import type { CarFormDataFullType } from 'features/car/car-edit-form'
import { toast } from 'react-toastify'
import { ERROR_MESSAGES, TOAST_MESSAGE } from 'shared/defaults/text'

export const checkIfExistErrorsOnEditCar = (formFields: CarFormDataFullType) => {
  let isErrors = false
  const formFieldsWithErrors = structuredClone(formFields)

  Object.keys(formFieldsWithErrors).forEach((key) => {
    const property = formFieldsWithErrors[key as keyof typeof formFieldsWithErrors]
    if (property.isRequired && !property.value) {
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
