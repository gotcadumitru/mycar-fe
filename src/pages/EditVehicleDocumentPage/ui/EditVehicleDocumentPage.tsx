import { useAuth } from 'app/providers/AuthContextProvider'
import { editVehicleDocument, vehicleDocumentToFormData } from 'enteties/vehicleDocument'
import VehicleDocumentEditForm, { vehicleDocumentEditActions } from 'features/vehicleDocumentEdit'
import { memo, useEffect, useId, useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { FetchStatus } from 'shared/api'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { REQUEST_MESSAGES } from 'shared/defaults/text'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import Button, { ButtonCategoryType, ButtonTheme } from 'shared/ui/Button'
import './editVehicleDocumentPage.scss'

const EditVehicleDocumentPage = () => {
  const { documentId } = useParams()
  const navigate = useNavigate()
  const formFields = useAppSelector((state) => state.vehicleDocumentEdit.formFields)
  const dispatch = useAppDispatch()
  const vehicleDocuments = useAppSelector((state) => state.vehicleDocument.vehiclesDocuments)
  const vehicleDocument = useMemo(
    () => vehicleDocuments.find((vehicleDocument) => vehicleDocument.uid === documentId),
    [vehicleDocuments],
  )
  const { currentUser } = useAuth()
  const formId = useId()

  useEffect(() => {
    if (vehicleDocument) {
      dispatch(
        vehicleDocumentEditActions.changeVehicleDocumentDataAC(
          vehicleDocumentToFormData(vehicleDocument),
        ),
      )
    }
  }, [vehicleDocument])
  if (!vehicleDocument) return <Navigate to={RoutePaths.garage} />
  const onSubmit = async () => {
    const dispatchAction = await dispatch(
      editVehicleDocument({
        vehicleDocumentFormData: formFields,
        userId: currentUser!.uid,
        vehicleDocumentId: vehicleDocument.uid,
        notification: REQUEST_MESSAGES.EDIT_VEHICLE_DOCUMENT,
      }),
    )
    if (dispatchAction.meta.requestStatus === FetchStatus.SUCCESS) {
      dispatch(vehicleDocumentEditActions.resetVehicleDocumentDataAC())
      navigate(-1)
    }
  }

  return (
    <div className='edit-vehicle-document-page'>
      <VehicleDocumentEditForm
        formId={formId}
        onSubmit={onSubmit}
        vehicleId={vehicleDocument.vehicleId}
      />
      <div className='edit-vehicle-document-page__footer'>
        <Button
          form={formId}
          type='submit'
          category={ButtonCategoryType.BUTTON}
          theme={ButtonTheme.OUTLINE_RED}
        >
          Salveaza
        </Button>
      </div>
    </div>
  )
}
export default memo(EditVehicleDocumentPage)
