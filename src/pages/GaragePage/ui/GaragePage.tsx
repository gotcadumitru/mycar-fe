import { useUserVehicles } from 'enteties/vehicle'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FetchStatus } from 'shared/api'
import AiOutlineRight from 'shared/assets/icons/AiOutlineRight.svg'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import File from 'shared/ui/File'
import './garagePage.scss'
import { GaragePageSkeleton } from './GaragePageSkeleton'

const GaragePage = () => {
  const { allVehiclesOfCurrentUserFetchStatus, allVehiclesOfCurrentUser } = useUserVehicles()
  if (allVehiclesOfCurrentUserFetchStatus !== FetchStatus.SUCCESS) return <GaragePageSkeleton />

  return (
    <div className='garage-page'>
      {!allVehiclesOfCurrentUser.length &&
        'Nihuia. nu ai masini, mergi pe pagina principala ca nu am adaugat inca un buton aici, vino dupa ce iti adaugi o masina'}
      {allVehiclesOfCurrentUser.map((vehicle) => {
        const vehicleFile = vehicle.files[0]
        return (
          <Link
            to={RoutePaths.garage}
            className='garage-page__item'
            onClick={() => toast.error('Nihuia, asta inca nu e gata')}
            key={vehicle.uid}
          >
            {vehicleFile && (
              <File
                className='garage-page__image'
                fileSrc={vehicleFile.fileUrl}
                name={vehicleFile.name}
                mimetype={vehicleFile.mimetype}
                size={vehicleFile.size}
                isFileFromBE
              />
            )}
            <div className='garage-page__details'>
              <div className='garage-page__title'>{vehicle.registrationNumber}</div>
              <div className='garage-page__model'>
                {vehicle.brand} {vehicle.model}
              </div>
            </div>

            <AiOutlineRight />
          </Link>
        )
      })}
    </div>
  )
}
export default GaragePage
