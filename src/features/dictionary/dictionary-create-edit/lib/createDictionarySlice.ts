import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { CreateDictionarySliceState } from './createDictionary.types'
import { getDictionaryFormValues } from './createDictionary.utils'

const initialState: CreateDictionarySliceState = {
  newDictionaryFormData: getDictionaryFormValues({}),
}

const createDictionarySlice = createSlice({
  name: 'createDictionary',
  initialState,
  reducers: {
    changeDictionaryDataAC(
      state,
      action: PayloadAction<ReturnType<typeof getDictionaryFormValues>>,
    ) {
      const newDictionaryFormData = action.payload
      state.newDictionaryFormData = newDictionaryFormData
    },
  },
})

export const { actions: createDictionaryActions } = createDictionarySlice
export const { reducer: createDictionaryReducer } = createDictionarySlice
