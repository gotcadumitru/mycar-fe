import classNames from 'classnames'
import React, { useId } from 'react'
import { FormDataField } from 'shared/lib/utils/checkIfExistErrors'
import BiImageAdd from 'shared/assets/icons/BiImageAdd.svg'
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
    const filesFromPC = Array.from(event.target.files || []).map((file) => ({
      name: file.name,
      file,
      mimetype: file.type,
      size: file.size,
    }))

    onChange([...valueLocal, ...filesFromPC])
  }

  const removeFile = (index: number) => {
    onChange(valueLocal.filter((_, i) => i !== index))
  }

  const containerClassNames = classNames('input__field-group', 'file-input', containerClassName, {
    'input--disabled': disabled,
    'input__field-group--error': errorMessageLocal,
  })
  return (
    <>
      <label htmlFor={fileInputId} className={containerClassNames}>
        {label && (
          <div className='file-input__label'>
            <span>{label}</span>
            <BiImageAdd className='file-input__icon' />
          </div>
        )}
        {!disabled && (
          <div className='file-input__files'>
            <div className='file-input__select-files'>
              <input
                id={fileInputId}
                multiple={multiple}
                type='file'
                accept={accept}
                onChange={handleFiles}
              />
            </div>
          </div>
        )}
      </label>
      {isDisplayImagesEnabled &&
        valueLocal.map((file, index) => {
          const isFileFromBE = typeof file.file === 'string'
          const fileSrc = (
            isFileFromBE ? file.file : URL.createObjectURL(file.file as Blob)
          ) as string
          return (
            <div key={file.name + index} className='file-input__file-container'>
              <div className='file-input__file-name'>
                {!disabled && (
                  <span
                    onClick={() => {
                      removeFile(index)
                    }}
                    className='file-input__remove-file'
                  >
                    X
                  </span>
                )}
              </div>
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
      {errorMessageLocal && <div className='input__error-message'>{errorMessageLocal} </div>}
    </>
  )
}
export default FileInput
