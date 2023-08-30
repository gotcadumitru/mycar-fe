import { createAsyncThunk } from '@reduxjs/toolkit'
import { kv } from '@vercel/kv'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { LeasingActions } from '../consts/leasingConsts'
import type { LeasingCompaniesType } from '../types/leasingTypes'

export const fetchAllLeasingCompaniesThunk = createAsyncThunk<
  LeasingCompaniesType[],
  void,
  ThunkConfig<string>
>(LeasingActions.FETCH_ALL_LEASING_COMPANIES, async () => {
  // const r = await kv.json.set("leasingCompanies", "$", JSON.stringify(response.data))
  const response: LeasingCompaniesType[] = await kv.json.get('leasingCompanies')
  return response
})
