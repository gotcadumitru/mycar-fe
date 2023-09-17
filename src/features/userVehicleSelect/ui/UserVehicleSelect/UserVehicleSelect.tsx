import { FC, memo, useMemo } from 'react'
import { useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { InputOptionType } from 'shared/ui/Input'
import InputSelect, { InputSelectWithLabel } from 'shared/ui/InputSelect'

type UserVehicleSelectProps = Omit<InputSelectWithLabel, 'options'>

const UserVehicleSelect: FC<UserVehicleSelectProps> = ({ className, ...props }) => {
  const allVehiclesOfCurrentUser = useAppSelector((state) => state.vehicle.allVehiclesOfCurrentUser)

  const userVehiclesOptions: InputOptionType<string>[] = useMemo(
    () =>
      allVehiclesOfCurrentUser.map((vehicle) => ({
        label: `${vehicle.registrationNumber} - ${vehicle.vin}`,
        value: vehicle.uid,
      })) ?? [],
    [allVehiclesOfCurrentUser],
  )

  return <InputSelect options={userVehiclesOptions} {...props} />
}
export default memo(UserVehicleSelect)
