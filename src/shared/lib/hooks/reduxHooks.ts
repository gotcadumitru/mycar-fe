import type { AppDispatch, StateSchema } from 'app/providers/StoreProvider'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector
