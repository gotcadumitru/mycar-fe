import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCategoryFormValues } from 'enteties/category'
import type { CreateEditCategorySliceState } from '../../model/types/createEditCategory.types'

export const initialState: CreateEditCategorySliceState = {
  newCategoryFormData: getCategoryFormValues({}),
}

export const createEditCategorySlice = createSlice({
  name: 'createEditCategory',
  initialState,
  reducers: {
    changeCategoryDataAC(state, action: PayloadAction<ReturnType<typeof getCategoryFormValues>>) {
      const newCategoryFormData = action.payload
      state.newCategoryFormData = newCategoryFormData
    },
    resetCategoryDataAC(state) {
      state.newCategoryFormData = getCategoryFormValues({})
    },
  },
})

export const { actions: createEditCategoryActions } = createEditCategorySlice
export const { reducer: createEditCategoryReducer } = createEditCategorySlice
