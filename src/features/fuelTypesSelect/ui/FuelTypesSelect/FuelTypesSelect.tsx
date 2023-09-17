import { selectRequestStatus } from 'app/providers/StoreProvider/slices/ui'
import { fetchAllTypesOfFuelThunk, FuelActions } from 'enteties/fuel'
import { FC, memo, useEffect, useMemo } from 'react'
import { FetchStatus } from 'shared/api'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { InputOptionType } from 'shared/ui/Input'
import InputSelect, { InputSelectWithLabel } from 'shared/ui/InputSelect'

type FuelTypesSelectProps = Omit<InputSelectWithLabel, 'options'>

const FuelTypesSelect: FC<FuelTypesSelectProps> = ({ ...props }) => {
  const dispatch = useAppDispatch()
  const typesOfFuel = useAppSelector((state) => state.fuel.typesOfFuel)
  const fetchStatus = useAppSelector(selectRequestStatus(FuelActions.FETCH_ALL_FUEL_TYPES))

  const fuelTypesOptions: InputOptionType<string>[] = useMemo(
    () =>
      typesOfFuel.map((fuelType) => ({
        label: fuelType.name,
        value: fuelType.id,
      })),
    [typesOfFuel],
  )
  useEffect(() => {
    dispatch(fetchAllTypesOfFuelThunk())
  }, [])

  return (
    <InputSelect
      isLoading={fetchStatus !== FetchStatus.SUCCESS}
      options={fuelTypesOptions}
      {...props}
    />
  )
}
export default memo(FuelTypesSelect)
