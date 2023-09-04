import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

export const GaragePageSkeleton: FC = () => (
  <div>
    <Skeleton count={4} height={80} className='react-loading-skeleton--panel' />
  </div>
)
