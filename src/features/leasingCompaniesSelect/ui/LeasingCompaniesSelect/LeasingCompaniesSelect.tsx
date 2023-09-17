import { selectRequestStatus } from 'app/providers/StoreProvider/slices/ui'
import { fetchAllLeasingCompaniesThunk, LeasingActions } from 'enteties/leasing'
import { FC, memo, useEffect, useMemo } from 'react'
import { FetchStatus } from 'shared/api'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { InputOptionType } from 'shared/ui/Input'
import InputSelect, { InputSelectWithLabel } from 'shared/ui/InputSelect'

type LeasingCompaniesSelectProps = Omit<InputSelectWithLabel, 'options'>

const LeasingCompaniesSelect: FC<LeasingCompaniesSelectProps> = ({ className, ...props }) => {
  const dispatch = useAppDispatch()
  const leasingCompanies = useAppSelector((state) => state.leasing.leasingCompanies)
  const fetchStatus = useAppSelector(
    selectRequestStatus(LeasingActions.FETCH_ALL_LEASING_COMPANIES),
  )

  const leasingCompaniesOptions: InputOptionType<string>[] = useMemo(
    () =>
      leasingCompanies.map((leasingCompany) => ({
        label: leasingCompany.name,
        value: leasingCompany.id,
      })),
    [leasingCompanies],
  )
  useEffect(() => {
    dispatch(fetchAllLeasingCompaniesThunk())
  }, [])

  return (
    <InputSelect
      isLoading={fetchStatus !== FetchStatus.SUCCESS}
      options={leasingCompaniesOptions}
      {...props}
    />
  )
}
export default memo(LeasingCompaniesSelect)
