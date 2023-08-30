import EditCarForm, { editCarActions } from 'features/car/car-edit-form'
import { useId } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { checkIfExistErrors } from 'shared/lib/utils/checkIfExistErrors'
import Button, { ButtonCategoryType, ButtonTheme } from 'shared/ui/Button'
import './newCarPage.scss'

const NewCarPage = () => {
  const navigate = useNavigate()
  const formFields = useAppSelector((state) => state.editCar.formFields)
  const dispatch = useAppDispatch()
  const formId = useId()
  const onSubmit = () => {
    const { formFieldsWithErrors, isErrors } = checkIfExistErrors(formFields)
    if (isErrors) return dispatch(editCarActions.changeCarDataAC(formFieldsWithErrors))
  }
  return (
    <div className='new-car-page'>
      <EditCarForm formId={formId} onSubmit={onSubmit} />
      <div className='new-car-page__footer'>
        <Button
          form={formId}
          type='submit'
          category={ButtonCategoryType.BUTTON}
          theme={ButtonTheme.EMPTY}
        >
          Salveaza
        </Button>
      </div>
    </div>
  )
}
export default NewCarPage
