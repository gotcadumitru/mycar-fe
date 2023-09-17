import { VehicleBrandsType } from 'enteties/vehicleBrand'
import { VehicleModelType } from 'enteties/vehicleModel'
import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

interface VehicleBrandAndModelProps {
  vehicleBrand?: VehicleBrandsType
  vehicleModel?: VehicleModelType
}

export const VehicleBrandAndModel: FC<VehicleBrandAndModelProps> = ({
  vehicleBrand,
  vehicleModel,
}) => (
  <>
    {vehicleBrand ? (
      vehicleBrand.name
    ) : (
      <Skeleton
        className='react-loading-skeleton--small-text react-loading-skeleton--no-m'
        height={15}
        count={1}
      />
    )}{' '}
    {vehicleModel ? (
      vehicleModel.name
    ) : (
      <Skeleton
        className='react-loading-skeleton--small-text react-loading-skeleton--no-m'
        height={15}
        count={1}
      />
    )}
  </>
)
