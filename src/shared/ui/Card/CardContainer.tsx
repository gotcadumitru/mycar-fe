import classNames from 'classnames'
import type { FC, PropsWithChildren } from 'react'
import './card.scss'

interface CardProps {
  className?: string
}

export const CardContainer: FC<PropsWithChildren<CardProps>> = ({ className, children }) => {
  const cardClassName = classNames('card', className, {})

  return <div className={cardClassName}>{children}</div>
}
