import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig, ThunkValue } from 'app/providers/StoreProvider'
import { categoryAPI, salesforceRemoteActions } from 'shared/api'
import { getInfoFromAPIJwt } from 'shared/lib/utils/jwt'
import type { ResponseWithBody } from 'shared/types/api.types'
import { mapCategoriesMinFromApi, mapCategoryFromApi } from '../../utils/category.utils'
import { CategoryActions } from '../consts/categoryConsts'
import type {
  Category,
  CategoryFromApi,
  CategoryMinType,
  CategoryMinTypeFromApi,
  CreateCategoryBody,
  EditCategoryBody,
  EditIsActiveCategoryThunk,
} from '../types/category.types'

export const fetchAllCategories = createAsyncThunk<CategoryMinType[], void, ThunkConfig<string>>(
  CategoryActions.FETCH_ALL_CATEGORIES,
  async (_, thunkApi) => {
    const response = await thunkApi.extra.categoryAPI.get<
      ResponseWithBody<CategoryMinTypeFromApi[]>
    >(`/categories/organisation/${getInfoFromAPIJwt().orgId}`)
    return mapCategoriesMinFromApi(response.data.body)
  },
)

const fetchCategoryById = async (categoryId: string) => {
  const response = await categoryAPI.get<ResponseWithBody<CategoryFromApi>>(
    `/category/organisation/${getInfoFromAPIJwt().orgId}/${categoryId}`,
  )
  return {
    categoryParsed: mapCategoryFromApi(response.data.body),
    categoryFromApi: response.data.body,
  }
}

export const fetchCategoryByIdThunk = createAsyncThunk<
  Category,
  ThunkValue<{ categoryId: string }>,
  ThunkConfig<string>
>(CategoryActions.FETCH_CATEGORY_BY_ID, async ({ categoryId }) => {
  const { categoryParsed } = await fetchCategoryById(categoryId)
  return categoryParsed
})
export const createNewCategoryThunk = createAsyncThunk<
  CategoryMinType,
  ThunkValue<{ categoryData: CreateCategoryBody }>,
  ThunkConfig<string>
>(CategoryActions.CREATE_CATEGORY, async ({ categoryData }) => {
  try {
    const newCategoryResponse = await salesforceRemoteActions.createCategory(categoryData)

    const newCategory = mapCategoryFromApi(newCategoryResponse)

    const newCategoryMinType: CategoryMinType = {
      id: newCategory.id,
      description: newCategory.description,
      isActive: newCategory.isActive,
      language: newCategory.language,
      name: newCategory.name,
      createdBy: newCategory.createdBy,
    }
    return newCategoryMinType
  } catch (err: any) {
    throw new Error(err?.error?.message)
  }
})

const editCategoryById = async (categoryData: EditCategoryBody) => {
  const newCategoryResponse = await salesforceRemoteActions.editCategory(categoryData)
  const newCategory = mapCategoryFromApi(newCategoryResponse)
  const newCategoryMinType: CategoryMinType = {
    id: newCategory.id,
    description: newCategory.description,
    isActive: newCategory.isActive,
    language: newCategory.language,
    name: newCategory.name,
    createdBy: newCategory.createdBy,
  }
  return newCategoryMinType
}
export const editCategoryByIdThunk = createAsyncThunk<
  CategoryMinType,
  ThunkValue<{ categoryData: EditCategoryBody }>,
  ThunkConfig<string>
>(CategoryActions.EDIT_CATEGORY, async ({ categoryData }) => {
  try {
    return await editCategoryById(categoryData)
  } catch (err: any) {
    throw new Error(err?.error?.message)
  }
})

export const changeIsCategoryActiveByIdThunk = createAsyncThunk<
  CategoryMinType,
  ThunkValue<{ categoryData: EditIsActiveCategoryThunk }>,
  ThunkConfig<string>
>(CategoryActions.CHANGE_IS_ACTIVE, async ({ categoryData: { categoryId, newActiveStatus } }) => {
  try {
    const { categoryFromApi, categoryParsed } = await fetchCategoryById(categoryId)

    const categoryData: EditCategoryBody = {
      id: categoryParsed.id,
      categoryName: categoryFromApi.name,
      language: categoryFromApi.language,
      description: categoryFromApi.description,
      definition: categoryFromApi.data,
      enabled: newActiveStatus,
      definitionString: categoryFromApi.definitionString,
      trigger: categoryFromApi.trigger,
      type: categoryFromApi.type,
      onlyAppliesTo: {
        groups: [],
        users: [],
      },
    }
    return await editCategoryById(categoryData)
  } catch (err: any) {
    throw new Error(err?.error?.message)
  }
})

export const deleteCategoryByIdThunk = createAsyncThunk<
  string,
  ThunkValue<{ categoryId: string }>,
  ThunkConfig<string>
>(CategoryActions.DELETE_CATEGORY_BY_ID, async ({ categoryId }) => {
  try {
    await salesforceRemoteActions.deleteCategoryById(categoryId)
    return categoryId
  } catch (err: any) {
    throw new Error(err?.error?.message)
  }
})
