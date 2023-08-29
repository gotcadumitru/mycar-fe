import { FC, memo } from 'react'
import InputSelect, { InputSelectWithLabel } from 'shared/ui/InputSelect'
import { vehicleYearOptions } from '../../consts/vehicleYearConsts'

type VehicleYearSelectProps = Omit<InputSelectWithLabel, 'options'>

const VehicleYearSelect: FC<VehicleYearSelectProps> = ({ ...props }) => {
  return <InputSelect options={[...vehicleYearOptions]} {...props} />
}
export default memo(VehicleYearSelect)
