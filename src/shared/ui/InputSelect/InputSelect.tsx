import classNames from 'classnames'
import { FC, useId } from 'react'
import Label from 'shared/ui/Label'
import type { InputSelectWithLabel } from './input-select.types'

const InputSelect: FC<InputSelectWithLabel> = ({
  label,

  errorMessage,
  className,
  containerClassName,
  disabled,
  placeholder,
  options = [],
  isFirstOptionDisabled = true,
  value = '',
  valueFullType,
  infoText,
  ...props
}) => {
  const inputId = useId()
  const errorMessageLocal = valueFullType?.errorMessage ?? errorMessage
  const valueLocal = valueFullType?.value ?? value

  const containerClassNames = classNames(containerClassName, {
    'input--disabled': disabled,
  })

  const inputClassName = classNames('input', 'input--simple', className, {
    'input--error': errorMessageLocal,
    'input--select-grey': valueLocal === '',
  })

  return (
    <div className={containerClassNames}>
      {label && <Label label={label} infoText={infoText} inputId={inputId} />}
      <select
        id={inputId}
        className={inputClassName}
        {...props}
        value={valueLocal}
        disabled={disabled}
      >
        {[
          {
            id: '',
            label: placeholder,
            disabled: isFirstOptionDisabled,
          },
          ...options,
        ].map((option) => (
          <option key={option.id} value={option.id} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMessageLocal && <div className='input__error-message'>{errorMessageLocal} </div>}
    </div>
  )
}
export default InputSelect
