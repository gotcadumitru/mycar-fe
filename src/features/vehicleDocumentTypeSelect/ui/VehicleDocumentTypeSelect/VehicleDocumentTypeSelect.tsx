import { VEHICLE_DOCUMENT_TYPES } from 'enteties/vehicleDocument'
import { FC, memo } from 'react'
import InputSelect, { InputSelectWithLabel } from 'shared/ui/InputSelect'

type VehicleDocumentTypeSelectProps = Omit<InputSelectWithLabel, 'options'>

const VehicleDocumentTypeSelect: FC<VehicleDocumentTypeSelectProps> = ({ ...props }) => (
  <InputSelect options={VEHICLE_DOCUMENT_TYPES} {...props} />
)
export default memo(VehicleDocumentTypeSelect)
