import { selectRequestStatus } from 'app/providers/StoreProvider/slices/ui'
import { fetchAllVehicleTypesThunk, VehicleActions } from 'enteties/vehicle'
import { FC, memo, useEffect, useMemo } from 'react'
import { FetchStatus } from 'shared/api'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { InputOptionType } from 'shared/ui/Input'
import InputSelect, { InputSelectWithLabel } from 'shared/ui/InputSelect'

type VehicleTypesSelectProps = Omit<InputSelectWithLabel, 'options'>

const VehicleTypesSelect: FC<VehicleTypesSelectProps> = ({ className, ...props }) => {
  const dispatch = useAppDispatch()
  const vehicleTypes = useAppSelector((state) => state.vehicle.vehicleTypes)
  const fetchStatus = useAppSelector(selectRequestStatus(VehicleActions.FETCH_ALL_VEHICLE_TYPES))

  const vehicleTypesOptions: InputOptionType<string>[] = useMemo(
    () =>
      vehicleTypes.map((vehicleType) => ({
        label: vehicleType.name,
        value: vehicleType.id,
      })),
    [vehicleTypes],
  )
  useEffect(() => {
    dispatch(fetchAllVehicleTypesThunk())
  }, [])

  return (
    <InputSelect
      isLoading={fetchStatus !== FetchStatus.SUCCESS}
      options={vehicleTypesOptions}
      {...props}
    />
  )
}
export default memo(VehicleTypesSelect)
