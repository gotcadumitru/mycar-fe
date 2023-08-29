import { FetchVehicleModelParams } from 'enteties/vehicleModel'

export const getIdFromVehicleTypeAndModel = (ids: FetchVehicleModelParams) =>
  `${ids.vehicleTypeId}_${ids.vehicleBrandId}`
