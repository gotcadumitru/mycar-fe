import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

export const VehiclePageSkeleton: FC = () => (
  <div>
    <Skeleton count={4} height={75} className='react-loading-skeleton--panel' />
  </div>
)
