import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

export const PanelPageSkeleton: FC = () => (
  <div className='react-loading-skeleton__padding-h'>
    <Skeleton count={2} height={80} />
    <div className='react-loading-skeleton--grid-2'>
      <Skeleton count={2} height={118} />
      <Skeleton count={2} height={118} />
    </div>
  </div>
)
