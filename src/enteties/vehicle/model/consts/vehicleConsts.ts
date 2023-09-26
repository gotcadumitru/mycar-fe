import { actionNameHelper } from 'shared/consts/uiConsts'

export const VehicleActions = {
  FETCH_ALL_VEHICLES_BY_USER_ID: 'FETCH_ALL_VEHICLES_BY_USER_ID',
  FETCH_VEHICLE_BY_ID: `FETCH_VEHICLE${actionNameHelper.byIdPrefix}`,
  CREATE_VEHICLE_FOR_USER_ID: 'CREATE_VEHICLE_FOR_USER_ID',
  EDIT_VEHICLE: 'EDIT_VEHICLE',
  DELETE_VEHICLE: 'DELETE_VEHICLE',
}
