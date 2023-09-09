import { FC } from 'react'
import TfiCar from 'shared/assets/icons/PiCarProfileBold.svg'
import File, { FileCollectionType } from 'shared/ui/File'
import './vehicleFile.scss'

interface VehicleFileProps {
  vehicleFile?: FileCollectionType
}

export const VehicleFile: FC<VehicleFileProps> = ({ vehicleFile }) =>
  vehicleFile ? (
    <File
      className='vehicle-file__image'
      fileSrc={vehicleFile.fileUrl}
      name={vehicleFile.name}
      mimetype={vehicleFile.mimetype}
      size={vehicleFile.size}
    />
  ) : (
    <TfiCar className='vehicle-file__car-icon' />
  )
