import { useAuth } from 'app/providers/AuthContextProvider'
import { createNewVehicleDocumentForVehicleId } from 'enteties/vehicleDocument'
import VehicleDocumentEditForm, { vehicleDocumentEditActions } from 'features/vehicleDocumentEdit'
import { memo, useId } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FetchStatus } from 'shared/api'
import { BUTTON_TEXT, REQUEST_MESSAGES } from 'shared/defaults/text'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import Button, { ButtonCategoryType, ButtonTheme } from 'shared/ui/Button'
import './addVehicleDocumentPage.scss'

const AddVehicleDocumentPage = () => {
  const { vehicleId } = useParams()
  const navigate = useNavigate()
  const formFields = useAppSelector((state) => state.vehicleDocumentEdit.formFields)
  const dispatch = useAppDispatch()
  const { currentUser } = useAuth()
  const formId = useId()
  const onSubmit = async () => {
    const dispatchAction = await dispatch(
      createNewVehicleDocumentForVehicleId({
        vehicleDocumentFormData: formFields,
        userId: currentUser!.uid,
        notification: REQUEST_MESSAGES.SAVE_NEW_VEHICLE_DOCUMENT,
      }),
    )
    if (dispatchAction.meta.requestStatus === FetchStatus.SUCCESS) {
      dispatch(vehicleDocumentEditActions.resetVehicleDocumentDataAC())
      navigate(-1)
    }
  }
  return (
    <div className='add-vehicle-document-page'>
      <VehicleDocumentEditForm formId={formId} onSubmit={onSubmit} vehicleId={vehicleId} />
      <div className='add-vehicle-document-page__footer'>
        <Button
          form={formId}
          type='submit'
          category={ButtonCategoryType.BUTTON}
          theme={ButtonTheme.OUTLINE_RED}
        >
          {BUTTON_TEXT.SAVE}
        </Button>
      </div>
    </div>
  )
}
export default memo(AddVehicleDocumentPage)
