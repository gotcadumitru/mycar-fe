import { useAuth } from 'app/providers/AuthContextProvider'
import { editVehiclesForUserId } from 'enteties/vehicle'
import { vehicleToFormData } from 'enteties/vehicle/utils/vehicleUtils'
import { editVehicleActions } from 'features/vehicle/vehicleEditForm'
import EditVehicleForm from 'features/vehicle/vehicleEditForm/ui/EditVehicleForm'
import { useEffect, useId } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { FetchStatus } from 'shared/api'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { REQUEST_MESSAGES } from 'shared/defaults/text'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import Button, { ButtonCategoryType, ButtonTheme } from 'shared/ui/Button'
import './editVehiclePage.scss'

const EditVehiclePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const formFields = useAppSelector((state) => state.editVehicle.formFields)
  const dispatch = useAppDispatch()
  const { currentUser } = useAuth()
  const vehicle = useAppSelector((state) =>
    state.vehicle.allVehiclesOfCurrentUser.find((v) => v.uid === id),
  )

  const formId = useId()

  useEffect(
    () => () => {
      dispatch(editVehicleActions.resetVehicleDataAC())
    },
    [],
  )

  useEffect(() => {
    if (vehicle) {
      dispatch(editVehicleActions.changeVehicleDataAC(vehicleToFormData(vehicle)))
    }
  }, [vehicle])

  if (!vehicle) return <Navigate to={RoutePaths.garage} />
  const onSubmit = async () => {
    if (!vehicle) return
    const dispatchAction = await dispatch(
      editVehiclesForUserId({
        vehicleFormData: formFields,
        vehicleId: vehicle.uid,
        userId: currentUser!.uid,
        notification: REQUEST_MESSAGES.EDIT_VEHICLE,
      }),
    )
    if (dispatchAction.meta.requestStatus === FetchStatus.SUCCESS) {
      navigate(RoutePaths.garage)
    }
  }

  return (
    <div className='edit-vehicle-page'>
      <EditVehicleForm formId={formId} onSubmit={onSubmit} />
      <div className='edit-vehicle-page__footer'>
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
export default EditVehiclePage
