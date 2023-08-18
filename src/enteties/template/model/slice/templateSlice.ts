import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import type { ResponseWithBody } from 'shared/types/api.types'
import { mapTemplatesFromApi } from '../../utils/mappers/templateMappers'
import { TemplateActions } from '../consts/templateConsts'
import type { Template, TemplateFromApi, TemplateSliceState } from '../types/template.types'

export const fetchAllTemplatesFromApiThunk = createAsyncThunk<
  Template[],
  void,
  ThunkConfig<string>
>(TemplateActions.FETCH_ALL_TEMPLATES, async (_, { extra: { categoryAPI } }) => {
  const response = await categoryAPI.get<ResponseWithBody<TemplateFromApi[]>>(
    '/categories/templates',
  )
  return mapTemplatesFromApi(response.data.body)
})
export const initialState: TemplateSliceState = {
  allTemplates: [],
}

export const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchAllTemplatesFromApiThunk.fulfilled, (state, action) => {
      state.allTemplates = action.payload
    }),
})
export const { actions: templateActions } = templateSlice
export const { reducer: templateReducer } = templateSlice
