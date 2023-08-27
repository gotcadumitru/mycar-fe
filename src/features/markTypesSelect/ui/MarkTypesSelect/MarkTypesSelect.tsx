import { fetchVehicleWithDetailsThunk } from 'enteties/vehicle/model/slice/vehicleThunks'
import { FC, memo, useEffect, useMemo } from 'react'
import { FetchStatus } from 'shared/api'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { InputOptionType } from 'shared/ui/Input'
import InputSelect, { InputSelectWithLabel } from 'shared/ui/InputSelect'

interface MarkTypesSelectProps extends Omit<InputSelectWithLabel, 'options'> {
  vehicleTypeId: number | null
}

const MarkTypesSelect: FC<MarkTypesSelectProps> = ({ className, vehicleTypeId, ...props }) => {
  const dispatch = useAppDispatch()
  const vehiclesWithDetails = useAppSelector((state) => state.vehicle.vehiclesWithDetails)
  const fetchStatus = useAppSelector(
    (state) => state.vehicle.vehiclesWithDetailsFetchStatus[vehicleTypeId!],
  )
  const vehicleWithDetails = useMemo(
    () => vehiclesWithDetails.find((vehicle) => vehicle.id === vehicleTypeId),
    [vehiclesWithDetails, vehicleTypeId],
  )

  const markTypesOptions: InputOptionType<string>[] = useMemo(
    () =>
      vehicleWithDetails?.vehicleBrands?.map((vehicleBrand) => ({
        label: vehicleBrand.name,
        value: vehicleBrand.id,
      })) ?? [],
    [vehicleWithDetails],
  )
  useEffect(() => {
    if (vehicleTypeId) {
      dispatch(fetchVehicleWithDetailsThunk(vehicleTypeId))
    }
  }, [vehicleTypeId])

  return (
    <InputSelect

      isLoading={!!vehicleTypeId && fetchStatus !== FetchStatus.SUCCESS}
      options={markTypesOptions}
      {...props}
    />
  )
}
export default memo(MarkTypesSelect)
