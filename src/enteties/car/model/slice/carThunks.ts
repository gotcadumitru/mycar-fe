import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { getInfoFromAPIJwt } from 'shared/lib/utils/jwt'
import type { ResponseWithBody } from 'shared/types/api.types'
import { mapCarFromApi } from '../../utils/car.utils'
import { CarActions } from '../consts/carConsts'
import type { Car } from '../types/car.types'

export const fetchAllCars = createAsyncThunk<Car[], void, ThunkConfig<string>>(
  CarActions.FETCH_ALL_USER_CARS,
  async (_, thunkApi) => {
    const response = await thunkApi.extra.carAPI.get<ResponseWithBody<Car[]>>(
      `/categories/organisation/${getInfoFromAPIJwt().orgId}`,
    )
    return mapCarFromApi(response.data.body)
  },
)
