import { selectRequestStatus } from 'app/providers/StoreProvider/slices/ui'
import { fetchAllOwnershipTypesThunk, OwnershipActions } from 'enteties/ownership'
import { FC, memo, useEffect, useMemo } from 'react'
import { FetchStatus } from 'shared/api'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { InputOptionType } from 'shared/ui/Input'
import InputSelect, { InputSelectWithLabel } from 'shared/ui/InputSelect'

type OwnershipTypesSelectProps = Omit<InputSelectWithLabel, 'options'>

const OwnershipTypesSelect: FC<OwnershipTypesSelectProps> = ({ className, ...props }) => {
  const dispatch = useAppDispatch()
  const ownershipTypes = useAppSelector((state) => state.ownership.ownershipTypes)
  const fetchStatus = useAppSelector(
    selectRequestStatus(OwnershipActions.FETCH_ALL_OWNERSHIP_TYPES),
  )

  const ownershipTypesOptions: InputOptionType<string>[] = useMemo(
    () =>
      ownershipTypes.map((ownershipType) => ({
        label: ownershipType.name,
        value: ownershipType.id,
      })),
    [ownershipTypes],
  )
  useEffect(() => {
    dispatch(fetchAllOwnershipTypesThunk())
  }, [])

  return (
    <InputSelect
      isLoading={fetchStatus !== FetchStatus.SUCCESS}
      options={ownershipTypesOptions}
      {...props}
    />
  )
}
export default memo(OwnershipTypesSelect)
