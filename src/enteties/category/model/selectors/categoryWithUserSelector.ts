import type { StateSchema } from 'app/providers/StoreProvider'

export const categoryWithUserSelector = (state: StateSchema) => {
  const { allCategories } = state.category
  const { allUsersFromSalesforce } = state.user
  return allCategories.map((category) => ({
    ...category,
    creator: allUsersFromSalesforce.find((user) => user.idFromApi === category.createdBy),
  }))
}
