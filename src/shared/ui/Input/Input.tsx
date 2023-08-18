import classNames from 'classnames'
import { forwardRef, useId } from 'react'
import Label from 'shared/ui/Label'
import './input.scss'
import { InputUiType, InputWithLabelProps } from './input.types'

const Input = forwardRef<HTMLInputElement, InputWithLabelProps>(
  (
    {
      valueFullType,
      label,
      errorMessage,
      containerClassName = '',
      className = '',
      disabled,
      value,
      infoText,
      uiType = InputUiType.SIMPLE,
      ...props
    },
    ref,
  ) => {
    const inputId = useId()
    const errorMessageLocal = valueFullType?.errorMessage ?? errorMessage
    const valueLocal = valueFullType?.value ?? value
    const inputClassName = classNames('input', className, {
      'input--error': errorMessageLocal,
      'input--simple': uiType === InputUiType.SIMPLE,
      'input--no-border': uiType === InputUiType.NO_BORDER,
      'input--no-border-small': uiType === InputUiType.SMALL_NO_BORDER,
    })
    return (
      <div className={`${containerClassName}${disabled ? ' input--disabled' : ''}`}>
        {label && <Label label={label} infoText={infoText} inputId={inputId} />}
        <input
          ref={ref}
          type='text'
          id={inputId}
          value={valueLocal}
          className={inputClassName}
          disabled={disabled}
          {...props}
        />
        {errorMessageLocal && <div className='input__error-message'>{errorMessageLocal} </div>}
      </div>
    )
  },
)
Input.displayName = 'Input'
export default Input
