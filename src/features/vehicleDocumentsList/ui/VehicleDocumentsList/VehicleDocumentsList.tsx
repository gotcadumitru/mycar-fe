import classNames from 'classnames'
import { VEHICLE_DOCUMENT_TYPES } from 'enteties/vehicleDocument'
import { selectVehicleDocumentsByVehicleId } from 'enteties/vehicleDocument/model/slice/vehicleDocumentSelectors'
import { FC, memo, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { RoutePathsFn } from 'shared/config/router/RoutePaths'
import { useAppSelector } from 'shared/lib/hooks/reduxHooks'
import Button, { ButtonCategoryType, ButtonTheme } from 'shared/ui/Button'
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

  return (
    <div className='vehicle-documents-list'>
      <div className='vehicle-documents-list__types'>
        {VEHICLE_DOCUMENT_TYPES.map((documentType, index) => (
          <Button
            key={documentType.value}
            theme={ButtonTheme.EMPTY}
            onClick={() => setSelectedDocumentTypeIndex(index)}
          >
            <div
              className={classNames('vehicle-documents-list__type', {
                'vehicle-documents-list__type--active': index === selectedDocumentTypeIndex,
              })}
            >
              {documentType.label}
            </div>
          </Button>
        ))}
      </div>
      <Button
        category={ButtonCategoryType.LINK}
        className='vehicle-documents-list__add-btn'
        to={RoutePathsFn.getNewVehicleDocument(vehicleId)}
        theme={ButtonTheme.EMPTY}
      >
        Adauga +
      </Button>
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
            (vehicleDocument) => vehicleDocument.type === vehicleDocumentType.value,
          )
          return (
            <div key={vehicleDocumentType.value}>
              {vehicleDocumentsForDocumentType.map((vehicleDocument) => (
                <VehicleDocumentItem
                  key={vehicleDocument.uid}
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
