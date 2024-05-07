import type { VehicleWithFiles } from 'enteties/vehicle'
import { useVehicleWithDetails } from 'enteties/vehicle'
import { FC, memo, useMemo } from 'react'
import { Link } from 'react-router-dom'
import AiOutlineRight from 'shared/assets/icons/AiOutlineRight.svg'
import { RoutePaths, RoutePathsFn } from 'shared/config/router/RoutePaths'
import { FILE_TYPE, MIME_TYPE_TO_FILE_TYPE } from 'shared/ui/File'
import { VehicleBrandAndModel } from 'shared/ui/VehicleBrandAndModel'
import { VehicleFile } from 'shared/ui/VehicleFile'

type GarageVehicleCardPropsType = {
  vehicle: VehicleWithFiles
}
const GarageVehicleCard: FC<GarageVehicleCardPropsType> = ({ vehicle }) => {
  const vehicleDetails = useVehicleWithDetails(vehicle.uid)
  const vehicleFile = useMemo(
    () => vehicle.files.find((file) => MIME_TYPE_TO_FILE_TYPE[file.mimetype] === FILE_TYPE.IMG),
    [vehicle.files],
  )

  return (
    <Link to={RoutePathsFn.getVehicle(vehicle.uid)} className='garage-page__item' key={vehicle.uid}>
      <VehicleFile vehicleFile={vehicleFile} />
      <div className='garage-page__details'>
        <div className='garage-page__title'>{vehicle.registrationNumber}</div>
        <div className='garage-page__model'>
          <VehicleBrandAndModel
            vehicleBrand={vehicleDetails.vehicleBrand}
            vehicleModel={vehicleDetails.vehicleModel}
          />
        </div>
      </div>
      <AiOutlineRight />
    </Link>
  )
}
export default memo(GarageVehicleCard)
