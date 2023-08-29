import { getFetchStatus } from 'app/providers/StoreProvider/slices/ui'
import {
  fetchVehicleModelsFroVehicleTypeIdAndBrandIdThunk,
  getIdFromVehicleTypeAndModel,
} from 'enteties/vehicleModel'
import { FC, memo, useEffect, useMemo } from 'react'
import { FetchStatus } from 'shared/api'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { InputOptionType } from 'shared/ui/Input'
import InputSelect, { InputSelectWithLabel } from 'shared/ui/InputSelect'

interface VehicleModelSelectProps extends Omit<InputSelectWithLabel, 'options'> {
  vehicleTypeId: number | null
  vehicleBrandId: number | null
}

const VehicleModelSelect: FC<VehicleModelSelectProps> = ({
  className,
  vehicleTypeId,
  vehicleBrandId,
  ...props
}) => {
  const dispatch = useAppDispatch()
  const vehicleModels = useAppSelector((state) => state.vehicleModel.vehicleModels)
  const fetchStatus = useAppSelector((state) =>
    getFetchStatus(
      state.vehicleModel.vehicleModelsWithFetchStatus[
        getIdFromVehicleTypeAndModel({
          vehicleTypeId: vehicleTypeId!,
          vehicleBrandId: vehicleBrandId!,
        })
      ]?.fetchStatus,
    ),
  )
  console.log(vehicleModels)
  const vehicleModel = useMemo(
    () =>
      vehicleModels.find(
        (brand) => brand.vehicleTypeId === vehicleTypeId && brand.vehicleBrandId === vehicleBrandId,
      ),
    [vehicleModels, vehicleTypeId, vehicleBrandId],
  )

  const vehicleModelsOptions: InputOptionType<string>[] = useMemo(
    () =>
      vehicleModel?.models?.map((size) => ({
        label: size.name,
        value: size.id,
      })) ?? [],
    [vehicleModel],
  )
  useEffect(() => {
    if (vehicleTypeId && vehicleBrandId) {
      dispatch(
        fetchVehicleModelsFroVehicleTypeIdAndBrandIdThunk({
          vehicleTypeId,
          vehicleBrandId,
        }),
      )
    }
  }, [vehicleTypeId, vehicleBrandId])

  return (
    <InputSelect
      isLoading={!!vehicleTypeId && !!vehicleBrandId && fetchStatus !== FetchStatus.SUCCESS}
      options={vehicleModelsOptions}
      {...props}
    />
  )
}
export default memo(VehicleModelSelect)
