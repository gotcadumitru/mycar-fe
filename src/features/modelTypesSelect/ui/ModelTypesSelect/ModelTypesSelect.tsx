import { fetchVehicleWithDetailsThunk } from 'enteties/vehicle/model/slice/vehicleThunks'
import { FC, memo, useEffect, useMemo } from 'react'
import { FetchStatus } from 'shared/api'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { InputOptionType } from 'shared/ui/Input'
import InputSelect, { InputSelectWithLabel } from 'shared/ui/InputSelect'

interface ModelTypesSelectProps extends Omit<InputSelectWithLabel, 'options'> {
  vehicleTypeId: number | null
  markTypeId: number | null
}

const ModelTypesSelect: FC<ModelTypesSelectProps> = ({
  className,
  vehicleTypeId,
  markTypeId,
  ...props
}) => {
  const dispatch = useAppDispatch()
  const vehiclesWithDetails = useAppSelector((state) => state.vehicle.vehiclesWithDetails)
  const fetchStatus = useAppSelector(
    (state) => state.vehicle.vehiclesWithDetailsFetchStatus[vehicleTypeId!],
  )
  const vehicleWithDetails = useMemo(
    () => vehiclesWithDetails.find((vehicle) => vehicle.id === vehicleTypeId),
    [vehiclesWithDetails, vehicleTypeId],
  )

  const vehicleBrandOptions: InputOptionType<string>[] = useMemo(
    () =>
      vehicleWithDetails?.vehicleBrands
        ?.find((vehicleBrand) => vehicleBrand.id === markTypeId)
        ?.vehicleModels.map((vehicleModel) => ({
          label: vehicleModel.name,
          value: vehicleModel.id,
        })) ?? [],
    [vehicleWithDetails, markTypeId],
  )
  useEffect(() => {
    if (vehicleTypeId) {
      dispatch(fetchVehicleWithDetailsThunk(vehicleTypeId))
    }
  }, [vehicleTypeId])

  return (
    <InputSelect
      isLoading={!!vehicleTypeId && fetchStatus !== FetchStatus.SUCCESS}
      options={vehicleBrandOptions}
      {...props}
    />
  )
}
export default memo(ModelTypesSelect)
