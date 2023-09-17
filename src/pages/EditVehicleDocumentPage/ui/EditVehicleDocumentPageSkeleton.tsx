import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

export const EditVehicleDocumentPageSkeleton: FC = () => (
  <div className='react-loading-skeleton__padding-h'>
    <Skeleton count={6} height={48} />
  </div>
)
