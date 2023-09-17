export type { OwnershipSliceState, OwnershipType } from './model/types/ownershipTypes'

export { fetchAllOwnershipTypesThunk } from './model/slice/ownershipThunks'

export { ownershipReducer, ownershipActions } from './model/slice/ownershipSlice'

export { OwnershipActions } from './model/consts/ownershipConsts'
