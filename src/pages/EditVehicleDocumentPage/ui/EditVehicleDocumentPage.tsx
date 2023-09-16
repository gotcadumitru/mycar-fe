import { useAuth } from 'app/providers/AuthContextProvider'
import { selectRequestStatus } from 'app/providers/StoreProvider/slices/ui'
import {
  editVehicleDocument,
  fetchVehicleDocumentById,
  VehicleDocumentActions,
  vehicleDocumentToFormData,
} from 'enteties/vehicleDocument'
import VehicleDocumentEditForm, { vehicleDocumentEditActions } from 'features/vehicleDocumentEdit'
import { EditVehicleDocumentPageSkeleton } from 'pages/EditVehicleDocumentPage'
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
  const vehicleDocumentsFetchStatus = useAppSelector(
    selectRequestStatus(VehicleDocumentActions.FETCH_VEHICLE_DOCUMENT_BY_ID),
  )
  const vehicleDocument = useMemo(
    () => vehicleDocuments.find((vehicleDocument) => vehicleDocument.uid === documentId),
    [vehicleDocuments],
  )
  const { currentUser } = useAuth()
  const formId = useId()

  useEffect(() => {
    if (documentId) dispatch(fetchVehicleDocumentById(documentId))
    return () => {
      dispatch(vehicleDocumentEditActions.resetVehicleDocumentDataAC())
    }
  }, [])
  useEffect(() => {
    if (vehicleDocument) {
      dispatch(
        vehicleDocumentEditActions.changeVehicleDocumentDataAC(
          vehicleDocumentToFormData(vehicleDocument),
        ),
      )
    }
  }, [vehicleDocument])
  console.log(vehicleDocumentsFetchStatus)
  if (vehicleDocumentsFetchStatus === FetchStatus.FAIL) return <Navigate to={RoutePaths.garage} />
  if (vehicleDocumentsFetchStatus !== FetchStatus.SUCCESS || !vehicleDocument)
    return <EditVehicleDocumentPageSkeleton />
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
