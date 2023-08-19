import classNames from 'classnames'
import type { FC } from 'react'
import { IconType } from 'react-icons/lib'
import { CardColor, CardType } from 'shared/ui/Card/card.types'
import { CardContainer } from 'shared/ui/Card/CardContainer'
import './card.scss'

type CardTypeOneProps = {
  className?: string
  title: string
  count: number
  description: string
  cardColor: CardColor
} & (
  | {
      type: CardType.WITHOUT_ICON
    }
  | {
      type: CardType.WITH_ICON
      Icon: IconType
    }
)

export const Card: FC<CardTypeOneProps> = ({
  className,
  cardColor,
  count,
  description,
  title,
  ...rest
}) => {
  const cardClassName = classNames(className, {
    'card--with-icon': rest.type === CardType.WITH_ICON,
  })

  const cardIconClassName = classNames('card__icon', {
    'card__icon--blue': cardColor === CardColor.BLUE,
    'card__icon--red': cardColor === CardColor.RED,
  })

  const cardCountClassName = classNames('card__count', {
    'card__count--blue': cardColor === CardColor.BLUE,
    'card__count--red': cardColor === CardColor.RED,
  })

  if (rest.type === CardType.WITH_ICON)
    return (
      <CardContainer>
        <div className={cardClassName}>
          <div className='card__left-side'>
            <span className={cardCountClassName}>{count}</span>
            <div className='card__text'>
              <div className='card__title'>{title}</div>
              <div className='card__description'>{description}</div>
            </div>
          </div>
            <rest.Icon className={cardIconClassName} />
        </div>
      </CardContainer>
    )
  return (
      <CardContainer>
        <div className={cardClassName}>
          <div className='card__left-side'>
            <span className={cardCountClassName}>{count}</span>
            <div className='card__text'>
              <div className='card__title'>{title}</div>
              <div className='card__description'>{description}</div>
            </div>
          </div>

        </div>
      </CardContainer>
  )
}
