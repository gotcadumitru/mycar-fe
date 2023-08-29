import classNames from 'classnames'
import { FC, useId } from 'react'
import Select from 'react-select-virtualized'
import Label from 'shared/ui/Label'
import type { InputSelectWithLabel } from './input-select.types'
import './inputSelect.scss'

const InputSelect: FC<InputSelectWithLabel> = ({
  label,
  errorMessage,
  className,
  containerClassName,
  disabled,
  isLoading,
  name,
  placeholder = '',
  options = [],
  value = '',
  valueFullType,
  infoText,
  onChange,
}) => {
  const inputId = useId()
  const errorMessageLocal = valueFullType?.errorMessage ?? errorMessage
  const valueLocal = valueFullType?.value ?? value
  const selectedOption = options.find((option) => option.value === valueLocal)
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
        inputId={inputId}
        className={`input-select ${errorMessage ? 'input--error' : ''} ${className}`}
        classNamePrefix='input-select'
        onChange={(newValue, actionMeta) => {
          if (actionMeta.action === 'clear') {
            onChange?.({ target: { name: name!, value: null } })
          } else {
            onChange?.({
              target: { name: name!, value: newValue!.value },
            })
          }
        }}
        options={options}
        isDisabled={disabled}
        isLoading={isLoading}
        isClearable
        name={name}
        isSearchable
        value={selectedOption}
        menuPortalTarget={document.body}
        placeholder={placeholder}
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
      />
      {errorMessageLocal && <div className='input__error-message'>{errorMessageLocal} </div>}
    </div>
  )
}
export default InputSelect
