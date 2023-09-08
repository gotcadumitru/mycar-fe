import { FC } from 'react'
import TfiCar from 'shared/assets/icons/TfiCar.svg'
import File, { FileCollectionType } from 'shared/ui/File'

interface VehicleFileProps {
  vehicleFile?: FileCollectionType
}

export const VehicleFile: FC<VehicleFileProps> = ({ vehicleFile }) =>
  vehicleFile ? (
    <File
      className='garage-page__image'
      fileSrc={vehicleFile.fileUrl}
      name={vehicleFile.name}
      mimetype={vehicleFile.mimetype}
      size={vehicleFile.size}
    />
  ) : (
    <TfiCar className='garage-page__car-icon' />
  )
