import { FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { OpenMode, QueryParams } from 'shared/types/types'

export const ActiveModal: FC = () => {
  const [searchParams] = useSearchParams()

  const modalType = searchParams.get(QueryParams.MODAL) as OpenMode

  if (!modalType) return null

  return null
}
