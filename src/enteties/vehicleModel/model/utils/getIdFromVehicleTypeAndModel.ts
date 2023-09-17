import type { FetchVehicleModelParams } from '../types/vehicleModelTypes'

export const getIdFromVehicleTypeAndModel = (ids: FetchVehicleModelParams) =>
  `${ids.vehicleTypeId}_${ids.vehicleBrandId}`
