import { useUserVehicles } from 'enteties/vehicle'
import { useVehicleWithDetails } from 'enteties/vehicle/hooks/useVehicleWithDetails'
import { FetchStatus } from 'shared/api'
import { VehiclePageSkeleton } from './VehiclePageSkeleton'
import './vehiclePage.scss'

const VehiclePage = () => {
  // const vehicleDetails = useVehicleWithDetails(vehicle)

  const { allVehiclesOfCurrentUserFetchStatus, allVehiclesOfCurrentUser } = useUserVehicles()
  if (allVehiclesOfCurrentUserFetchStatus !== FetchStatus.SUCCESS) return <VehiclePageSkeleton />

  return <div className='vehicle-page'>vehicle padaddawdaw</div>
}
export default VehiclePage
