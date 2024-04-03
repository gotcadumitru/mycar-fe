import GarageVehicleCard from 'features/garageVehicleCard'
import { useAppSelector } from 'shared/lib/hooks/reduxHooks'
import './garagePage.scss'

const notFoundMessage = 'Nu exista vehicule adaugate, poti adauga de pe pagina principala'
const GaragePage = () => {
  const allVehiclesOfCurrentUser = useAppSelector((state) => state.vehicle.allVehiclesOfCurrentUser)
  return (
    <div className='garage-page'>
      {!allVehiclesOfCurrentUser.length && notFoundMessage}
      {allVehiclesOfCurrentUser.map((vehicle) => (
        <GarageVehicleCard key={vehicle.uid} vehicle={vehicle} />
      ))}
    </div>
  )
}
export default GaragePage
