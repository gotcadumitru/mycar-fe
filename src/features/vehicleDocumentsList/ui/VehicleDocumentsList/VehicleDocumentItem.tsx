import { VehicleDocument } from 'enteties/vehicleDocument'
import React, { FC, memo } from 'react'
import { useNavigate } from 'react-router-dom'

type VehicleDocumentProps = {
  vehicleId: string
  vehicleDocument: VehicleDocument
}

const VehicleDocumentItem: FC<VehicleDocumentProps> = ({ vehicleId, vehicleDocument }) => {
  const navigate = useNavigate()

  return (
    <div className='vehicle-documents-list__document' key={vehicleDocument.uid}>
      {vehicleDocument.name}
    </div>
  )
}
export default memo(VehicleDocumentItem)
