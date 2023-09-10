import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

export const EditVehiclePageSkeleton: FC = () => (
  <div>
    <Skeleton count={10} height={48} className='react-loading-skeleton--panel' />
  </div>
)
