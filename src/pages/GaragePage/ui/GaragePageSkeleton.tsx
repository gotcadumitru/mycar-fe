import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

export const GaragePageSkeleton: FC = () => (
  <div
    className='react-loading-skeleton__padding-h'
    style={{ marginTop: 'calc(env(safe-area-inset-top) + 12px)' }}
  >
    <Skeleton count={4} height={75} />
  </div>
)
