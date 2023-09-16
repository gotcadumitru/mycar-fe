import { VehicleDocument } from 'enteties/vehicleDocument'
import { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import AiOutlineInfoCircle from 'shared/assets/icons/AiOutlineInfoCircle.svg'
import AiOutlineRight from 'shared/assets/icons/AiOutlineRight.svg'
import { RoutePaths } from 'shared/config/router/RoutePaths'

type VehicleDocumentProps = {
  vehicleDocument: VehicleDocument
}

const VehicleDocumentItem: FC<VehicleDocumentProps> = ({ vehicleDocument }) => (
  <Link
    to={RoutePaths.edit_vehicle_document + `/${vehicleDocument.uid}`}
    className='vehicle-documents-list__document'
  >
    <AiOutlineInfoCircle className='vehicle-documents-list__info-icon' />
    <div className='vehicle-documents-list__name-date'>
      <div className='vehicle-documents-list__name'>{vehicleDocument.name}</div>
      <div className='vehicle-documents-list__date'>
        {vehicleDocument.expirationDate || `Seteaza data ${vehicleDocument.name}`}
      </div>
    </div>
    <AiOutlineRight className='vehicle-documents-list__arrow-icon' />
  </Link>
)
export default memo(VehicleDocumentItem)
