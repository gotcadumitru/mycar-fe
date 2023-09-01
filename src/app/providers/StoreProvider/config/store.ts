import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { fuelReducer } from 'enteties/fuel'
import { leasingReducer } from 'enteties/leasing'
import { ownershipReducer } from 'enteties/ownership'
import { tyreReducer } from 'enteties/tyre'
import { userReducer } from 'enteties/user'
import { vehicleReducer } from 'enteties/vehicle'
import { vehicleBrandReducer } from 'enteties/vehicleBrand'
import { vehicleModelReducer } from 'enteties/vehicleModel'
import { vehicleTypeReducer } from 'enteties/vehicleType'
import { vignetteReducer } from 'enteties/vignette'
import { authReducer } from 'features/auth'
import { editVehicleReducer } from 'features/vehicle/vehicleEditForm'
import { carAPI } from 'shared/api'
import { uiReducer } from '../slices/ui'
import type { StateSchema } from '../types/stateSchema'
import type { ThunkExtraArg } from '../types/thunk'

export const rootReducers: ReducersMapObject<StateSchema> = {
  ui: uiReducer,
  editVehicle: editVehicleReducer,
  vehicle: vehicleReducer,
  user: userReducer,
  leasing: leasingReducer,
  vehicleType: vehicleTypeReducer,
  fuel: fuelReducer,
  ownership: ownershipReducer,
  vignette: vignetteReducer,
  tyre: tyreReducer,
  vehicleBrand: vehicleBrandReducer,
  vehicleModel: vehicleModelReducer,
  auth: authReducer,
}

export function createReduxStore(initialState?: StateSchema) {
  const extraArg: ThunkExtraArg = {
    carAPI,
  }

  return configureStore({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
