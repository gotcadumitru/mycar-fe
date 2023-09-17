import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

export const VehiclePageSkeleton: FC = () => (
  <div className='react-loading-skeleton__padding-h'>
    <Skeleton count={1} height={55} />
    <Skeleton count={11} height={12} />
  </div>
)
