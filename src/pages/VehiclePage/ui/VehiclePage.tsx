import { calculateAverageConsumption } from 'enteties/vehicle'
import { useVehicleWithDetails } from 'enteties/vehicle/hooks/useVehicleWithDetails'
import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { FetchStatus } from 'shared/api'
import { FileCarouselAsync } from 'shared/ui/FileCarousel'
import { VehicleBrandAndModel } from 'shared/ui/VehicleBrandAndModel'
import { VehicleDetailsField } from 'shared/ui/VehicleDetailsField'
import { VehicleFile } from 'shared/ui/VehicleFile'
import './vehiclePage.scss'
import { VehiclePageSkeleton } from './VehiclePageSkeleton'

const VehiclePage = () => {
  const { id } = useParams()
  const vehicleDetails = useVehicleWithDetails(id || '')
  const averageFuelConsumption = useMemo(
    () => calculateAverageConsumption(vehicleDetails.vehicle ? [vehicleDetails.vehicle] : []),
    [vehicleDetails.vehicle],
  )
  if (vehicleDetails.vehicleFetchStatus !== FetchStatus.SUCCESS || !vehicleDetails.vehicle)
    return <VehiclePageSkeleton />

  return (
    <div className='vehicle-page'>
      <div className='vehicle-page__header'>
        <div className='vehicle-page__title'>
          <div className='vehicle-page__number'>{vehicleDetails.vehicle.registrationNumber}</div>
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
          <VehicleDetailsField title='Leasing' infoList={[vehicleDetails.leasingCompany?.name]} />
          <VehicleDetailsField title='Detinut de' infoList={[vehicleDetails.ownershipType?.name]} />
          <VehicleDetailsField title='CIV' infoList={[vehicleDetails.vehicle.civSeries]} />
        </div>
      </div>
    </div>
  )
}
export default VehiclePage
