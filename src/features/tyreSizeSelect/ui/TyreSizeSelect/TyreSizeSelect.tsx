import { getFetchStatus } from 'app/providers/StoreProvider/slices/ui'
import { fetchTyreSizesFroVehicleTypeIdThunk } from 'enteties/tyre'
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
  const tyreSizes = useAppSelector((state) => state.tyre.tyreSizes)
  const fetchStatus = useAppSelector((state) =>
    getFetchStatus(state.tyre.tyreSizesWithFetchStatus[vehicleTypeId!]?.fetchStatus),
  )
  const vehicleWithDetails = useMemo(
    () => tyreSizes.find((tyreSize) => tyreSize.id === vehicleTypeId),
    [tyreSizes, vehicleTypeId],
  )

  const tyreSizeOptions: InputOptionType<string>[] = useMemo(
    () =>
      vehicleWithDetails?.sizes?.map((size) => ({
        label: size.name,
        value: size.id,
      })) ?? [],
    [vehicleWithDetails],
  )
  useEffect(() => {
    if (vehicleTypeId) {
      dispatch(fetchTyreSizesFroVehicleTypeIdThunk(vehicleTypeId))
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
