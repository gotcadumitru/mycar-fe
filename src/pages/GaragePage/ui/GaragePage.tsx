import GarageVehicleCard from 'features/garageVehicleCard'
import { useAppSelector } from 'shared/lib/hooks/reduxHooks'
import './garagePage.scss'

const GaragePage = () => {
  const allVehiclesOfCurrentUser = useAppSelector((state) => state.vehicle.allVehiclesOfCurrentUser)

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
