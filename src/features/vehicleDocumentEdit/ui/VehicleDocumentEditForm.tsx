import VehicleDocumentTypeSelect from 'features/vehicleDocumentTypeSelect'
import { ChangeEvent, FC, memo } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { checkIfExistErrors } from 'shared/lib/utils/checkIfExistErrors'
import type { FileInputType } from 'shared/ui/File'
import FileInput from 'shared/ui/FileInput'
import Form from 'shared/ui/Form'
import Input, { OnChangeMinType } from 'shared/ui/Input'
import TextArea from 'shared/ui/TextArea'
import { vehicleDocumentEditActions } from '../lib/slice/vehicleDocumentEditSlice'
import '../styles/vehicle-document-edit.scss'

interface EditCarFormProps {
  formId: string
  onSubmit: () => void
}

const VehicleDocumentEditForm: FC<EditCarFormProps> = ({ formId, onSubmit }) => {
  const formFields = useAppSelector((state) => state.vehicleDocumentEdit.formFields)
  const dispatch = useAppDispatch()
  const onInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | OnChangeMinType,
  ) => {
    const { value } = event.target
    const name = event.target.name as keyof typeof formFields

    dispatch(
      vehicleDocumentEditActions.changeVehicleDataAC({
        ...formFields,
        [name]: {
          ...formFields[name],
          value,
          errorMessage: '',
        },
      }),
    )
  }

  const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    const name = event.target.name as keyof typeof formFields
    dispatch(
      vehicleDocumentEditActions.changeVehicleDataAC({
        ...formFields,
        [name]: {
          ...formFields[name],
          value: checked,
          errorMessage: '',
        },
      }),
    )
  }

  const handleChangeInputFile = (files: FileInputType[]) => {
    dispatch(
      vehicleDocumentEditActions.changeVehicleDataAC({
        ...formFields,
        files: {
          ...formFields.files,
          value: files,
          errorMessage: '',
        },
      }),
    )
  }
  const onSubmitLocal = async () => {
    const { formFieldsWithErrors, isErrors } = checkIfExistErrors(formFields)
    if (isErrors)
      return dispatch(vehicleDocumentEditActions.changeVehicleDataAC(formFieldsWithErrors))
    onSubmit()
  }
  return (
    <Form id={formId} onSubmit={onSubmitLocal} className='vehicle-document-edit'>
      <Input
        valueFullType={formFields.name}
        name='type'
        onChange={onInputChange}
        label='Numele documentului'
      />
      <VehicleDocumentTypeSelect
        valueFullType={formFields.type}
        name='type'
        onChange={onInputChange}
        label='Tipul documentului'
      />
      <Input
        valueFullType={formFields.creationDate}
        type='date'
        name='creationDate'
        onChange={onInputChange}
        label='Data crearii'
      />
      <Input
        valueFullType={formFields.expirationDate}
        type='date'
        name='expirationDate'
        onChange={onInputChange}
        label='Data expirarii'
      />
      <TextArea
        valueFullType={formFields.notes}
        name='notes'
        onChange={onInputChange}
        label='Notite'
      />
      <FileInput
        valueFullType={formFields.files}
        onChange={handleChangeInputFile}
        label='Selecteaza fisiere'
      />
    </Form>
  )
}

export default memo(VehicleDocumentEditForm)
