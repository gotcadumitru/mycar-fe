import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

export const GaragePageSkeleton: FC = () => (
  <div style={{ marginTop: 'calc(env(safe-area-inset-top) + 12px)' }}>
    <Skeleton count={4} height={75} className='react-loading-skeleton--panel' />
  </div>
)
