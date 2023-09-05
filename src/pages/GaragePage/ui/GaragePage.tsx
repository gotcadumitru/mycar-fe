import { useUserVehicles } from 'enteties/vehicle'
import GarageVehicleCard from 'features/garageVehicleCard'
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
        return <GarageVehicleCard key={vehicle.uid} vehicle={vehicle} />
      })}
    </div>
  )
}
export default GaragePage
