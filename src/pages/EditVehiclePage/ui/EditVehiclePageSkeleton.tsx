import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

export const EditVehiclePageSkeleton: FC = () => (
  <div className='react-loading-skeleton__padding-h'>
    <Skeleton count={10} height={48} />
  </div>
)
