import { useAuth } from 'app/providers/AuthContextProvider'
import { selectRequestStatus } from 'app/providers/StoreProvider/slices/ui'
import {
  editVehiclesForUserId,
  fetchVehicleById,
  getVehicleFormValues,
  VehicleActions,
} from 'enteties/vehicle'
import { editVehicleActions } from 'features/vehicle/vehicleEditForm'
import EditVehicleForm from 'features/vehicle/vehicleEditForm/ui/EditVehicleForm'
import React, { useEffect, useId, useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { FetchStatus } from 'shared/api'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { REQUEST_MESSAGES } from 'shared/defaults/text'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import Button, { ButtonCategoryType, ButtonTheme } from 'shared/ui/Button'
import './editVehiclePage.scss'
import { EditVehiclePageSkeleton } from './EditVehiclePageSkeleton'

const EditVehiclePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const formFields = useAppSelector((state) => state.editVehicle.formFields)
  const dispatch = useAppDispatch()
  const { currentUser } = useAuth()
  const vehicles = useAppSelector((state) => state.vehicle.allVehiclesOfCurrentUser)
  const vehicleFetchStatus = useAppSelector(selectRequestStatus(VehicleActions.FETCH_VEHICLE_BY_ID))
  const vehicle = useMemo(() => vehicles.find((v) => v.uid === id), [vehicles])
  const formId = useId()
  useEffect(() => {
    if (id) dispatch(fetchVehicleById(id))
    return () => {
      dispatch(editVehicleActions.resetVehicleDataAC())
    }
  }, [])
  useEffect(() => {
    if (vehicle) {
      dispatch(
        editVehicleActions.changeVehicleDataAC(
          getVehicleFormValues({
            files: vehicle.files.map((file) => ({
              file: file.fileUrl,
              uid: file.uid,
              fileUrl: file.fileUrl,
              name: file.name,
              mimetype: file.mimetype,
              size: file.size,
            })),
            brand: vehicle.brand,
            numberOfSeats: `${vehicle.numberOfSeats}`,
            isLeasingVehicle: vehicle.isLeasingVehicle,
            leasingCompany: vehicle.leasingCompany,
            civSeries: vehicle.civSeries,
            ownedBy: vehicle.ownedBy,
            power: `${vehicle.power}`,
            cylinderCapacity: `${vehicle.cylinderCapacity}`,
            maximumAuthorisedMass: `${vehicle.maximumAuthorisedMass}`,
            color: vehicle.color,
            fuelType: vehicle.fuelType,
            yearOfProduction: vehicle.yearOfProduction,
            registrationNumber: vehicle.registrationNumber,
            type: vehicle.type,
            winterTyreSize: vehicle.winterTyreSize,
            summerTyreSize: vehicle.summerTyreSize,
            model: vehicle.model,
            dotSummerTyre: vehicle.dotSummerTyre,
            dotWinterTyre: vehicle.dotWinterTyre,
            fuelConsumptionExtraUrb: `${vehicle.fuelConsumptionExtraUrb}`,
            fuelConsumptionUrb: `${vehicle.fuelConsumptionUrb}`,
            usagePercentExtraUrb: `${vehicle.usagePercentExtraUrb}`,
            usagePercentUrb: `${vehicle.usagePercentUrb}`,
            vin: vehicle.vin,
          }),
        ),
      )
    }
  }, [vehicle])

  if (vehicleFetchStatus === FetchStatus.FAIL) return <Navigate to={RoutePaths.garage} />
  if (vehicleFetchStatus !== FetchStatus.SUCCESS || !vehicle) return <EditVehiclePageSkeleton />
  const onSubmit = async () => {
    if (!vehicle) return
    const dispatchAction = await dispatch(
      editVehiclesForUserId({
        vehicleFormData: formFields,
        vehicleId: vehicle.uid,
        userId: currentUser!.uid,
        notification: REQUEST_MESSAGES.SAVE_NEW_VEHICLE,
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
