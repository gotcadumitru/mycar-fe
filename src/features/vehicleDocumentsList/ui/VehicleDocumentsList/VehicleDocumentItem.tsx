import { VehicleDocument } from 'enteties/vehicleDocument'
import { FC, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import AiOutlineInfoCircle from 'shared/assets/icons/AiOutlineInfoCircle.svg'
import AiOutlineRight from 'shared/assets/icons/AiOutlineRight.svg'

type VehicleDocumentProps = {
  vehicleId: string
  vehicleDocument: VehicleDocument
}

const VehicleDocumentItem: FC<VehicleDocumentProps> = ({ vehicleId, vehicleDocument }) => {
  const navigate = useNavigate()

  return (
    <div className='vehicle-documents-list__document' key={vehicleDocument.uid}>
      <AiOutlineInfoCircle className='vehicle-documents-list__info-icon' />
      <div className='vehicle-documents-list__name-date'>
        <div className='vehicle-documents-list__name'>{vehicleDocument.name}</div>
        <div className='vehicle-documents-list__date'>
          {vehicleDocument.expirationDate || `Seteaza data ${vehicleDocument.name}`}
        </div>
      </div>
      <AiOutlineRight className='vehicle-documents-list__arrow-icon' />
    </div>
  )
}
export default memo(VehicleDocumentItem)
