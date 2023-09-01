import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

export const PanelPageSkeleton: FC = () => (
  <div>
    <Skeleton count={2} height={80} className='react-loading-skeleton--panel' />
    <div className='react-loading-skeleton--grid-2'>
      <Skeleton count={2} height={118} className='react-loading-skeleton--panel' />
      <Skeleton count={2} height={118} className='react-loading-skeleton--panel' />
    </div>
  </div>
)
