import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { LeasingActions } from '../consts/leasingConsts'
import type { LeasingCompaniesType } from '../types/leasingTypes'

export const fetchAllLeasingCompaniesThunk = createAsyncThunk<
  LeasingCompaniesType[],
  void,
  ThunkConfig<string>
>(LeasingActions.FETCH_ALL_LEASING_COMPANIES, async (_, thunkApi) => {
  const response = await thunkApi.extra.carAPI.get<LeasingCompaniesType[]>('/leasingCompanies')
  return response.data
})
