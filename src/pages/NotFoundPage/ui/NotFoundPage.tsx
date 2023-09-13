import classNames from 'classnames'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import AiOutlineLeft from 'shared/assets/icons/AiOutlineLeft.svg'
import { TOAST_MESSAGE } from 'shared/defaults/text'
import Button, { ButtonTheme } from 'shared/ui/Button'
import './not-found-page.scss'

interface NotFoundPageProps {
  className?: string
  text?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({
  className,
  text = TOAST_MESSAGE.PAGE_NOT_FOUND,
}) => {
  const navigate = useNavigate()
  return (
    <h2 className={classNames('not-found-page', className)}>
      <div>{text}</div>
      <Button theme={ButtonTheme.OUTLINE_RED} onClick={() => navigate(-1)}>
        Pagina precedenta
      </Button>
    </h2>
  )
}
