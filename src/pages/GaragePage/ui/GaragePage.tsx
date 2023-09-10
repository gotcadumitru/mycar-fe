import { useUserVehicles } from 'enteties/vehicle'
import GarageVehicleCard from 'features/garageVehicleCard'
import { FetchStatus } from 'shared/api'
import './garagePage.scss'
import { GaragePageSkeleton } from './GaragePageSkeleton'

const GaragePage = () => {
  const { allVehiclesOfCurrentUserFetchStatus, allVehiclesOfCurrentUser } = useUserVehicles()
  if (allVehiclesOfCurrentUserFetchStatus !== FetchStatus.SUCCESS) return <GaragePageSkeleton />

  return (
    <div className='garage-page'>
      {!allVehiclesOfCurrentUser.length &&
        'Nihuia. nu ai masini, mergi pe pagina principala ca nu am adaugat inca un buton aici, vino dupa ce iti adaugi o masina'}
      {allVehiclesOfCurrentUser.map((vehicle) => (
        <GarageVehicleCard key={vehicle.uid} vehicle={vehicle} />
      ))}
    </div>
  )
}
export default GaragePage
