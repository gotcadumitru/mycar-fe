import classNames from 'classnames'
import { FC } from 'react'
import { TOAST_MESSAGE } from 'shared/defaults/text'
import './not-found-page.scss'

interface NotFoundPageProps {
  className?: string
  text?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({
  className,
  text = TOAST_MESSAGE.PAGE_NOT_FOUND,
}) => <h2 className={classNames('not-found-page', className)}>{text}</h2>
