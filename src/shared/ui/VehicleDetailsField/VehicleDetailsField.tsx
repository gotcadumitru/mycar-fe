import { FC, ReactNode } from 'react'
import './vehicle-details-field.scss'
import Skeleton from 'react-loading-skeleton'

interface VehicleDetailsFieldProps {
  title: ReactNode
  infoList: ReactNode[]
}

export const VehicleDetailsField: FC<VehicleDetailsFieldProps> = ({ title, infoList }) => (
  <div className='vehicle-details-field'>
    <div className='vehicle-details-field__title'>{title}</div>
    {infoList.map((item, index) => (
      <div key={index} className='vehicle-details-field__info'>
        {item || <Skeleton count={1} height={12} />}
      </div>
    ))}
  </div>
)
