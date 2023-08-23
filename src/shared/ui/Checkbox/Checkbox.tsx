import classNames from 'classnames'
import { FC, useId } from 'react'
import './checkbox.scss'
import type { CheckboxPropsType } from './checkbox.types'

const Checkbox: FC<CheckboxPropsType> = ({
  label,
  errorMessage,
  value,
  valueFullType,
  isGrey,
  className = '',
  disabled,
  checked,
  ...props
}) => {
  const checkboxId = useId()

  // const errorMessageLocal = valueFullType?.errorMessage ?? errorMessage
  const valueLocal = valueFullType?.value ?? value
  const checkboxLabelClassName = classNames('checkbox', className, {
    'checkbox--grey': isGrey,
    'checkbox--disabled': disabled,
  })
  const checkboxTextClassName = classNames('checkbox__checkmark', {
    'checkbox--grey__checkmark': isGrey,
  })
  console.log(valueLocal)
  return (
    <label htmlFor={checkboxId} className={checkboxLabelClassName}>
      {label}
      <input id={checkboxId} type='checkbox' disabled={disabled} checked={valueLocal} {...props} />
      <span className={checkboxTextClassName} />
    </label>
  )
}
export default Checkbox
