import classNames from 'classnames'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import './button.scss'
import {
  ButtonCategoryType,
  ButtonConditionalPropsType,
  ButtonDisplayType,
  ButtonSize,
  ButtonTheme,
} from './button.types'

const Button: FC<ButtonConditionalPropsType> = ({
  className,
  size = ButtonSize.NORMAL_SIZE,
  theme,
  children,
  displayType = ButtonDisplayType.DEFAULT,
  ...props
}) => {
  const buttonClassName = classNames('button', className, {
    'button--blue': ButtonTheme.BLUE === theme,
    'button--green': ButtonTheme.GREEN === theme,
    'button--grey': ButtonTheme.GREY === theme,
    'button--red': ButtonTheme.RED === theme,
    'button--disabled': ButtonTheme.DISABLED === theme,
    'button--empty': ButtonTheme.EMPTY === theme,
    'button--normal-size': ButtonSize.NORMAL_SIZE === size,
    'button--input-size': ButtonSize.INPUT_SIZE === size,
    'button--link':
      ButtonCategoryType.LINK === props.category ||
      ButtonCategoryType.EXTERNAL_LINK === props.category,
    'button--contents': ButtonDisplayType.CONTENTS === displayType,
  })

  if (props.category === ButtonCategoryType.LINK) {
    return (
      <Link className={buttonClassName} {...props}>
        {children}
      </Link>
    )
  }

  if (props.category === ButtonCategoryType.EXTERNAL_LINK) {
    return (
      <a className={buttonClassName} {...props}>
        {children}
      </a>
    )
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  )
}
export default Button
