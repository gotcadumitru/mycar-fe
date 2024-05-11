import { calculateAverageConsumption } from 'enteties/vehicle'
import { useVehicleWithDetails } from 'enteties/vehicle/hooks/useVehicleWithDetails'
import DeleteVehicleButton from 'features/deleteVehicleButton'
import VehicleDocuments from 'features/vehicleDocumentsList'
import { memo, useMemo } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import MdOutlineEdit from 'shared/assets/icons/MdOutlineEdit.svg'
import { RoutePaths, RoutePathsFn } from 'shared/config/router/RoutePaths'
import Button, { ButtonCategoryType, ButtonTheme } from 'shared/ui/Button'
import { FileCarouselAsync } from 'shared/ui/FileCarousel'
import { VehicleBrandAndModel } from 'shared/ui/VehicleBrandAndModel'
import { VehicleDetailsField } from 'shared/ui/VehicleDetailsField'
import { VehicleFile } from 'shared/ui/VehicleFile'
import './vehiclePage.scss'

const VehiclePage = () => {
  const { id } = useParams()
  const vehicleDetails = useVehicleWithDetails(id || '')
  const averageFuelConsumption = useMemo(
    () => calculateAverageConsumption(vehicleDetails.vehicle ? [vehicleDetails.vehicle] : []),
    [vehicleDetails.vehicle],
  )

  if (!vehicleDetails.vehicle) return <Navigate to={RoutePaths.garage} />
  return (
    <div className='vehicle-page'>
      <div className='vehicle-page__header'>
        <div className='vehicle-page__title'>
          <div className='vehicle-page__number'>
            {vehicleDetails.vehicle.registrationNumber}
            <Button
              theme={ButtonTheme.EMPTY}
              category={ButtonCategoryType.LINK}
              to={RoutePathsFn.getEditVehicle(vehicleDetails.vehicle.uid)}
            >
              <MdOutlineEdit className='vehicle-page__edit-icon' />
            </Button>
            <DeleteVehicleButton vehicleId={vehicleDetails.vehicle.uid} />
          </div>
          <div className='vehicle-page__model'>
            <VehicleBrandAndModel
              vehicleBrand={vehicleDetails.vehicleBrand}
              vehicleModel={vehicleDetails.vehicleModel}
            />
          </div>
        </div>
        <div>
          <div className='vehicle-page__files'>
            {vehicleDetails.vehicle.files.length ? (
              <FileCarouselAsync
                filesToPreview={[vehicleDetails.vehicle.files[0]]}
                files={vehicleDetails.vehicle.files}
              />
            ) : (
              <VehicleFile />
            )}
          </div>
        </div>
      </div>
      <div className='vehicle-page__details'>
        <div className='vehicle-page__details-row'>
          <VehicleDetailsField title='An' infoList={[vehicleDetails.vehicle.yearOfProduction]} />
          <VehicleDetailsField
            title='Anvelope'
            infoList={[vehicleDetails.winterTyreSize?.name, vehicleDetails.summerTyreSize?.name]}
          />
          <VehicleDetailsField title='Putere' infoList={[vehicleDetails.vehicle.power]} />
        </div>
        <div className='vehicle-page__details-row'>
          <VehicleDetailsField
            title='Combustibil'
            infoList={[vehicleDetails.vehicleTypeOfFuel?.name]}
          />
          <VehicleDetailsField title='Consum' infoList={[averageFuelConsumption]} />
          <VehicleDetailsField
            title='Capacitate'
            infoList={[vehicleDetails.vehicle.cylinderCapacity]}
          />
        </div>
        <div className='vehicle-page__details-row'>
          <VehicleDetailsField title='Setie sasiu' infoList={[vehicleDetails.vehicle.vin]} />
          <VehicleDetailsField title='Culoare' infoList={[vehicleDetails.vehicle.color]} />
          <VehicleDetailsField
            title='Masa maxima'
            infoList={[vehicleDetails.vehicle.maximumAuthorisedMass]}
          />
        </div>
        <div className='vehicle-page__details-row'>
          <VehicleDetailsField title='KW' infoList={[vehicleDetails.vehicle.power]} />
          <VehicleDetailsField
            title='Nr. de locuri'
            infoList={[vehicleDetails.vehicle.numberOfSeats]}
          />
          <VehicleDetailsField title='Data inmatric.' infoList={['-']} />
        </div>
        <div className='vehicle-page__details-row'>
          <VehicleDetailsField
            title='Leasing'
            infoList={
              vehicleDetails.vehicle.leasingCompany ? [vehicleDetails.leasingCompany?.name] : ['-']
            }
          />
          <VehicleDetailsField title='Detinut de' infoList={[vehicleDetails.ownershipType?.name]} />
          <VehicleDetailsField title='CIV' infoList={[vehicleDetails.vehicle.civSeries]} />
        </div>
      </div>
      <VehicleDocuments vehicleId={vehicleDetails.vehicle.uid} />
    </div>
  )
}
export default memo(VehiclePage)
