import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

export const NewVehiclePageSkeleton: FC = () => (
  <div>
    <Skeleton count={10} height={48} className='react-loading-skeleton--panel' />
  </div>
)
