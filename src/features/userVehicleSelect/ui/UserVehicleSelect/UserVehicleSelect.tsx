import { useUserVehicles } from 'enteties/vehicle'
import { FC, memo, useMemo } from 'react'
import { FetchStatus } from 'shared/api'
import { InputOptionType } from 'shared/ui/Input'
import InputSelect, { InputSelectWithLabel } from 'shared/ui/InputSelect'

type UserVehicleSelectProps = Omit<InputSelectWithLabel, 'options'>

const UserVehicleSelect: FC<UserVehicleSelectProps> = ({ className, ...props }) => {
  const { allVehiclesOfCurrentUserFetchStatus, allVehiclesOfCurrentUser } = useUserVehicles()

  const userVehiclesOptions: InputOptionType<string>[] = useMemo(
    () =>
      allVehiclesOfCurrentUser.map((vehicle) => ({
        label: `${vehicle.registrationNumber} - ${vehicle.vin}`,
        value: vehicle.uid,
      })) ?? [],
    [allVehiclesOfCurrentUser],
  )

  return (
    <InputSelect
      isLoading={allVehiclesOfCurrentUserFetchStatus !== FetchStatus.SUCCESS}
      options={userVehiclesOptions}
      {...props}
    />
  )
}
export default memo(UserVehicleSelect)
