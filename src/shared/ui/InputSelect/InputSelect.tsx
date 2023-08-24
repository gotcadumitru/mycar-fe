import classNames from 'classnames'
import { FC, useId, useMemo } from 'react'
import Select from 'react-select-virtualized'
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
      <Select

        className={`input-select ${errorMessage ? 'input--error' : ''} ${className}`}
        classNamePrefix='input-select'
        onChange={(newValue: any, actionMeta) => {
          if (actionMeta.action === 'clear') {
            onChange({ target: { name: actionMeta.name!, label: '', value: '' } })
          } else {
            onChange({
              target: { name: actionMeta.name!, label: newValue!.label, value: newValue.value },
            })
          }
        }}
        options={options}
        {...props}
        isClearable
        value={{ inputValue: value, label: label || value }}
        menuPortalTarget={document.body}
        isDisabled={disabled}
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
      />
      {errorMessageLocal && <div className='input__error-message'>{errorMessageLocal} </div>}
    </div>
  )
}
export default InputSelect
