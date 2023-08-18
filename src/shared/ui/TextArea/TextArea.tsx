import classNames from 'classnames'
import { FC, useEffect, useId, useRef } from 'react'
import Label from 'shared/ui/Label'
import './textarea.scss'
import type { TextAreaWithLabelProps } from './textarea.types'

const TextArea: FC<TextAreaWithLabelProps> = ({
  containerClassName = '',
  disabled,
  valueFullType,
  label,
  value,
  errorMessage,
  className = '',
  infoText,
  ...props
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const inputId = useId()
  const errorMessageLocal = valueFullType?.errorMessage ?? errorMessage
  const valueLocal = valueFullType?.value ?? value

  const containerClassNames = classNames('input__field-group', containerClassName, {
    'input--disabled': disabled,
  })

  const textAreaClassName = classNames('input', 'textarea', className, {
    'textarea--error': errorMessageLocal,
  })

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = '5px'
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`
      if (inputRef.current.scrollHeight >= 200) {
        inputRef.current.style.overflow = 'auto'
      } else {
        inputRef.current.style.overflow = 'hidden'
      }
    }
  }, [valueLocal])

  return (
    <div className={containerClassNames}>
      {label && <Label label={label} infoText={infoText} inputId={inputId} />}
      <textarea
        id={inputId}
        className={textAreaClassName}
        ref={inputRef}
        value={valueLocal}
        disabled={disabled}
        {...props}
      />
      {errorMessageLocal && <div className='input__error-message'>{errorMessageLocal} </div>}
    </div>
  )
}

export default TextArea
