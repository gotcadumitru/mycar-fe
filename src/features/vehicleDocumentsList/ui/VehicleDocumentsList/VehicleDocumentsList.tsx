import classNames from 'classnames'
import { fetchAllVehicleDocumentsThunk, VEHICLE_DOCUMENT_TYPES } from 'enteties/vehicleDocument'
import { selectVehicleDocumentsByVehicleId } from 'enteties/vehicleDocument/model/slice/vehicleDocumentSelectors'
import { FC, memo, useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import Button, { ButtonTheme } from 'shared/ui/Button'
import '../../styles/vehicleDocumentsList.scss'
import VehicleDocumentItem from './VehicleDocumentItem'

type VehicleDocumentsProps = {
  vehicleId: string
}

const VehicleDocumentsList: FC<VehicleDocumentsProps> = ({ vehicleId }) => {
  const vehicleDocuments = useAppSelector((state) =>
    selectVehicleDocumentsByVehicleId(state, vehicleId),
  )
  const [selectedDocumentTypeIndex, setSelectedDocumentTypeIndex] = useState(0)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(fetchAllVehicleDocumentsThunk(vehicleId))
  }, [])
  return (
    <div className='vehicle-documents-list'>
      <div className='vehicle-documents-list__types'>
        {VEHICLE_DOCUMENT_TYPES.map((documentType, index) => {
          const className = classNames('vehicle-documents-list__type', {
            'vehicle-documents-list__type--active': index === selectedDocumentTypeIndex,
          })
          return (
            <Button
              key={documentType.id}
              theme={ButtonTheme.EMPTY}
              onClick={() => setSelectedDocumentTypeIndex(index)}
            >
              <div className={className}>{documentType.name}</div>
            </Button>
          )
        })}
      </div>

      <Carousel
        infiniteLoop
        emulateTouch
        selectedItem={selectedDocumentTypeIndex}
        useKeyboardArrows
        showIndicators={false}
        showArrows={false}
        onChange={setSelectedDocumentTypeIndex}
        showStatus={false}
        swipeable
        showThumbs={false}
        dynamicHeight={false}
      >
        {VEHICLE_DOCUMENT_TYPES.map((vehicleDocumentType) => {
          const vehicleDocumentsForDocumentType = vehicleDocuments.filter(
            (vehicleDocument) => vehicleDocument.type === vehicleDocumentType.id,
          )
          return (
            <div key={vehicleDocumentType.id}>
              {vehicleDocumentsForDocumentType.map((vehicleDocument) => (
                <VehicleDocumentItem
                  key={vehicleDocument.uid}
                  vehicleId={vehicleId}
                  vehicleDocument={vehicleDocument as any}
                />
              ))}
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}
export default memo(VehicleDocumentsList)
