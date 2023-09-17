import { getFetchStatus } from 'app/providers/StoreProvider/slices/ui'
import { fetchVehicleBrandsFroVehicleTypeIdThunk } from 'enteties/vehicleBrand'
import { FC, memo, useEffect, useMemo } from 'react'
import { FetchStatus } from 'shared/api'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { InputOptionType } from 'shared/ui/Input'
import InputSelect, { InputSelectWithLabel } from 'shared/ui/InputSelect'

interface VehicleBrandSelectProps extends Omit<InputSelectWithLabel, 'options'> {
  vehicleTypeId: number | null
}

const VehicleBrandSelect: FC<VehicleBrandSelectProps> = ({
  className,
  vehicleTypeId,
  ...props
}) => {
  const dispatch = useAppDispatch()
  const vehicleBrands = useAppSelector((state) => state.vehicleBrand.vehicleBrands)
  const fetchStatus = useAppSelector((state) =>
    getFetchStatus(state.vehicleBrand.vehicleBrandsWithFetchStatus[vehicleTypeId!]?.fetchStatus),
  )
  const vehicleBrand = useMemo(
    () => vehicleBrands.find((brand) => brand.id === vehicleTypeId),
    [vehicleBrands, vehicleTypeId],
  )
  const vehicleBrandOptions: InputOptionType<string>[] = useMemo(
    () =>
      vehicleBrand?.brands?.map((size) => ({
        label: size.name,
        value: size.id,
      })) ?? [],
    [vehicleBrand],
  )
  useEffect(() => {
    if (vehicleTypeId) {
      dispatch(fetchVehicleBrandsFroVehicleTypeIdThunk(vehicleTypeId))
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
export default memo(VehicleBrandSelect)
