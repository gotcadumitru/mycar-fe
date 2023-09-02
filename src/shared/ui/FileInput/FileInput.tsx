import classNames from 'classnames'
import React, { useId } from 'react'
import AiOutlineDelete from 'shared/assets/icons/AiOutlineDelete.svg'
import BiImageAdd from 'shared/assets/icons/BiImageAdd.svg'
import { FormDataField } from 'shared/lib/utils/checkIfExistErrors'
import Button, { ButtonTheme } from 'shared/ui/Button'
import { v4 } from 'uuid'
import File, { FileInputType } from '../File'
import './file-input.scss'

interface FileInputPropsType
  extends Omit<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'onChange' | 'value'
  > {
  label: string
  containerClassName?: string
  errorMessage?: string
  value?: FileInputType[]
  valueFullType?: FormDataField<FileInputType[]>
  isDisplayImagesEnabled?: boolean
  onChange: (files: FileInputType[]) => void
}

const FileInput: React.FC<FileInputPropsType> = ({
  label,
  errorMessage,
  disabled,
  onChange,
  accept = '.png, .jpg, .jpeg',
  containerClassName,
  value = [],
  valueFullType,
  multiple = true,
  isDisplayImagesEnabled = true,
}) => {
  const fileInputId = useId()
  const errorMessageLocal = valueFullType?.errorMessage ?? errorMessage
  const valueLocal = valueFullType?.value ?? value
  const handleFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filesFromPC: FileInputType[] = Array.from(event.target.files || []).map((file) => ({
      name: file.name,
      file,
      mimetype: file.type,
      size: file.size,
      id: v4(),
    }))
    onChange([...valueLocal, ...filesFromPC])
  }

  const removeFile = (id: string) => {
    onChange(valueLocal.filter((file) => file.id !== id))
  }

  const containerClassNames = classNames('input__field-group', 'file-input', containerClassName, {
    'input--disabled': disabled,
    'input__field-group--error': errorMessageLocal,
    'file-input--no-margin': !valueLocal.length,
  })
  return (
    <div className='file-input__container'>
      <label htmlFor={fileInputId} className={containerClassNames}>
        {label && (
          <div className='file-input__label'>
            <span>{label}</span>
            <BiImageAdd className='file-input__icon' />
          </div>
        )}
        {!disabled && (
          <input
            id={fileInputId}
            multiple={multiple}
            type='file'
            accept={accept}
            onChange={handleFiles}
          />
        )}
      </label>
      {isDisplayImagesEnabled && (
        <div className='file-input__files'>
          {valueLocal.map((file) => {
            const isFileFromBE = typeof file.file === 'string'
            const fileSrc = (
              isFileFromBE ? file.file : URL.createObjectURL(file.file as Blob)
            ) as string
            return (
              <div key={file.id} className='file-input__file-container'>
                <Button
                  type='button'
                  theme={ButtonTheme.EMPTY}
                  onClick={() => removeFile(file.id)}
                  className='file-input__remove-icon'
                >
                  <AiOutlineDelete />
                </Button>
                <File
                  fileSrc={fileSrc}
                  isFileFromBE={isFileFromBE}
                  mimetype={file.mimetype}
                  name={file.name}
                  disabled={disabled}
                  size={file.size}
                  className='file-input__file'
                />
              </div>
            )
          })}
        </div>
      )}
      {errorMessageLocal && <div className='input__error-message'>{errorMessageLocal} </div>}
    </div>
  )
}
export default FileInput
