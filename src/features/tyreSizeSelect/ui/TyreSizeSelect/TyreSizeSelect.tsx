import { fetchVehicleWithDetailsThunk } from 'enteties/vehicle/model/slice/vehicleThunks'
import { FC, memo, useEffect, useMemo } from 'react'
import { FetchStatus } from 'shared/api'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { InputOptionType } from 'shared/ui/Input'
import InputSelect, { InputSelectWithLabel } from 'shared/ui/InputSelect'

interface TyreSizeSelectProps extends Omit<InputSelectWithLabel, 'options'> {
  vehicleTypeId: number | null
}

const TyreSizeSelect: FC<TyreSizeSelectProps> = ({ className, vehicleTypeId, ...props }) => {
  const dispatch = useAppDispatch()
  const vehiclesWithDetails = useAppSelector((state) => state.vehicle.vehiclesWithDetails)
  const fetchStatus = useAppSelector(
    (state) => state.vehicle.vehiclesWithDetailsFetchStatus[vehicleTypeId!],
  )
  const vehicleWithDetails = useMemo(
    () => vehiclesWithDetails.find((vehicle) => vehicle.id === vehicleTypeId),
    [vehiclesWithDetails, vehicleTypeId],
  )

  const tyreSizeOptions: InputOptionType<string>[] = useMemo(
    () =>
      vehicleWithDetails?.tyreSize?.map((size) => ({
        label: size.name,
        value: size.id,
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
      options={tyreSizeOptions}
      {...props}
    />
  )
}
export default memo(TyreSizeSelect)
