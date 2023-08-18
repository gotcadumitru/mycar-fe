import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit'
import type { CategorySliceState } from '../types/category.types'
import {
  changeIsCategoryActiveByIdThunk,
  createNewCategoryThunk,
  deleteCategoryByIdThunk,
  editCategoryByIdThunk,
  fetchAllCategories,
  fetchCategoryByIdThunk,
} from './categoryThunks'

export const initialState: CategorySliceState = {
  allCategories: [],
  selectedCategory: null,
  toolbarSearchByValue: '',
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setToolbarSearchValue: (state, action: PayloadAction<string>) => {
      state.toolbarSearchByValue = action.payload
    },
    resetSelectedCategoryData: (state) => {
      state.selectedCategory = null
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.allCategories = action.payload
      })
      .addCase(fetchCategoryByIdThunk.fulfilled, (state, action) => {
        state.selectedCategory = action.payload
      })
      .addCase(createNewCategoryThunk.fulfilled, (state, action) => {
        state.allCategories.unshift(action.payload)
      })
      .addCase(deleteCategoryByIdThunk.fulfilled, (state, action) => {
        state.allCategories = state.allCategories.filter(
          (category) => category.id !== action.payload,
        )
      })
      .addMatcher(
        isAnyOf(editCategoryByIdThunk.fulfilled, changeIsCategoryActiveByIdThunk.fulfilled),
        (state, action) => {
          const changedCategory = action.payload
          // move to the top of the list
          state.allCategories = state.allCategories.filter((c) => c.id !== changedCategory.id)
          state.allCategories.unshift(changedCategory)
        },
      ),
})
export const { actions: categoryActions } = categorySlice
export const { reducer: categoryReducer } = categorySlice
