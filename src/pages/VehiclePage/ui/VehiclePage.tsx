import { useVehicleWithDetails } from 'enteties/vehicle/hooks/useVehicleWithDetails'
import React from 'react'
import { useParams } from 'react-router-dom'
import { FetchStatus } from 'shared/api'
import File from 'shared/ui/File'
import { FileCarouselAsync } from 'shared/ui/FileCarousel'
import { VehicleBrandAndModel } from 'shared/ui/VehicleBrandAndModel'
import './vehiclePage.scss'
import { VehicleFile } from 'shared/ui/VehicleFile'
import { VehiclePageSkeleton } from './VehiclePageSkeleton'

const VehiclePage = () => {
  const { id } = useParams()
  const vehicleDetails = useVehicleWithDetails(id || '')
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
    </div>
  )
}
export default VehiclePage
