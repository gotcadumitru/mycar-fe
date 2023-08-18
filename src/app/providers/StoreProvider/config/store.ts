import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { categoryReducer } from 'enteties/category'
import { templateReducer } from 'enteties/template'
import { userReducer } from 'enteties/user'
import { createEditCategoryReducer } from 'features/category/category-create-edit'
import { categoryAPI, sapienAPI } from 'shared/api'
import { uiReducer } from '../slices/ui'
import type { StateSchema } from '../types/stateSchema'
import type { ThunkExtraArg } from '../types/thunk'

export const rootReducers: ReducersMapObject<StateSchema> = {
  ui: uiReducer,
  createCategory: createEditCategoryReducer,
  createDictionary: {} as any,
  category: categoryReducer,
  user: userReducer,
  template: templateReducer,
}

export function createReduxStore(initialState?: StateSchema) {
  const extraArg: ThunkExtraArg = {
    categoryAPI,
    sapienAPI,
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
