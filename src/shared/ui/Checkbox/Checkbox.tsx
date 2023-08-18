import classNames from 'classnames'
import { FC, useId } from 'react'
import './checkbox.scss'
import type { CheckboxPropsType } from './checkbox.types'

const Checkbox: FC<CheckboxPropsType> = ({ label, isGrey, className = '', disabled, ...props }) => {
  const checkboxId = useId()

  const checkboxLabelClassName = classNames('checkbox', className, {
    'checkbox--grey': isGrey,
    'checkbox--disabled': disabled,
  })
  const checkboxTextClassName = classNames('checkbox__checkmark', {
    'checkbox--grey__checkmark': isGrey,
  })

  return (
    <label htmlFor={checkboxId} className={checkboxLabelClassName}>
      {label}
      <input id={checkboxId} type='checkbox' disabled={disabled} {...props} />
      <span className={checkboxTextClassName} />
    </label>
  )
}
export default Checkbox
