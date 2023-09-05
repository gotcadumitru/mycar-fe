import { useVehicleWithDetails } from 'enteties/vehicle/hooks/useVehicleWithDetails'
import { VehicleWithFiles } from 'enteties/vehicle/model/types/vehicleTypes'
import { FC, memo } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import AiOutlineRight from 'shared/assets/icons/AiOutlineRight.svg'
import TfiCar from 'shared/assets/icons/TfiCar.svg'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import File, { FILE_TYPE, MIME_TYPE_TO_FILE_TYPE } from 'shared/ui/File'

type GarageVehicleCardPropsType = {
  vehicle: VehicleWithFiles
}
const GarageVehicleCard: FC<GarageVehicleCardPropsType> = ({ vehicle }) => {
  const vehicleDetails = useVehicleWithDetails(vehicle)
  const vehicleFile = vehicle.files.find(
    (file) => MIME_TYPE_TO_FILE_TYPE[file.mimetype] === FILE_TYPE.IMG,
  )
  return (
    <Link
      to={RoutePaths.garage}
      className='garage-page__item'
      onClick={() => toast.error('Nihuia, asta inca nu e gata')}
      key={vehicle.uid}
    >
      {vehicleFile ? (
        <File
          className='garage-page__image'
          fileSrc={vehicleFile.fileUrl}
          name={vehicleFile.name}
          mimetype={vehicleFile.mimetype}
          size={vehicleFile.size}
          isFileFromBE
        />
      ) : (
        <TfiCar className='garage-page__car-icon' />
      )}
      <div className='garage-page__details'>
        <div className='garage-page__title'>{vehicle.registrationNumber}</div>
        <div className='garage-page__model'>
          {vehicleDetails.vehicleBrand ? (
            vehicleDetails.vehicleBrand.name
          ) : (
            <Skeleton className='react-loading-skeleton--small-text' height={20} count={1} />
          )}{' '}
          {vehicleDetails.vehicleModel ? (
            vehicleDetails.vehicleModel.name
          ) : (
            <Skeleton className='react-loading-skeleton--small-text' height={20} count={1} />
          )}
        </div>
      </div>

      <AiOutlineRight />
    </Link>
  )
}
export default memo(GarageVehicleCard)
