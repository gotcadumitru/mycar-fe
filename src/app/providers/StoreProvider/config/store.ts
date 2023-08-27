import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { carReducer } from 'enteties/car'
import { fuelReducer } from 'enteties/fuel'
import { leasingReducer } from 'enteties/leasing'
import { ownershipReducer } from 'enteties/ownership'
import { userReducer } from 'enteties/user'
import { vehicleReducer } from 'enteties/vehicle'
import { vignetteReducer } from 'enteties/vignette'
import { editCarReducer } from 'features/car/car-edit-form'
import { carAPI } from 'shared/api'
import { uiReducer } from '../slices/ui'
import type { StateSchema } from '../types/stateSchema'
import type { ThunkExtraArg } from '../types/thunk'

export const rootReducers: ReducersMapObject<StateSchema> = {
  ui: uiReducer,
  editCar: editCarReducer,
  car: carReducer,
  user: userReducer,
  leasing: leasingReducer,
  vehicle: vehicleReducer,
  fuel: fuelReducer,
  ownership: ownershipReducer,
  vignette: vignetteReducer,
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
