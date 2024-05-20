import UserVehicleSelect from 'features/userVehicleSelect'
import VehicleDocumentTypeSelect from 'features/vehicleDocumentTypeSelect'
import { ChangeEvent, FC, memo, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { RoutePaths, RoutePathsFn } from 'shared/config/router/RoutePaths'
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
  vehicleId?: string
  onSubmit: () => void
}

const VehicleDocumentEditForm: FC<EditCarFormProps> = ({ formId, vehicleId, onSubmit }) => {
  const formFields = useAppSelector((state) => state.vehicleDocumentEdit.formFields)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (vehicleId)
      dispatch(
        vehicleDocumentEditActions.changeVehicleDocumentDataAC({
          ...formFields,
          vehicleId: {
            ...formFields.vehicleId,
            value: vehicleId,
          },
        }),
      )
    return () => {
      dispatch(vehicleDocumentEditActions.resetVehicleDocumentDataAC())
    }
  }, [vehicleId])
  const onInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | OnChangeMinType,
  ) => {
    const { value } = event.target
    const name = event.target.name as keyof typeof formFields

    dispatch(
      vehicleDocumentEditActions.changeVehicleDocumentDataAC({
        ...formFields,
        [name]: {
          ...formFields[name],
          value,
          errorMessage: '',
        },
      }),
    )
  }
  const handleChangeInputFile = (files: FileInputType[]) => {
    dispatch(
      vehicleDocumentEditActions.changeVehicleDocumentDataAC({
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
      return dispatch(vehicleDocumentEditActions.changeVehicleDocumentDataAC(formFieldsWithErrors))
    onSubmit()
  }

  if (!vehicleId) return <Navigate to={RoutePathsFn.getGarage()} />

  return (
    <Form id={formId} onSubmit={onSubmitLocal} className='vehicle-document-edit'>
      <UserVehicleSelect
        valueFullType={formFields.vehicleId}
        name='vehicleId'
        onChange={onInputChange}
        label='Vehiculul'
      />
      <Input
        valueFullType={formFields.name}
        name='name'
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
        accept='image/*, application/pdf'
      />
    </Form>
  )
}

export default memo(VehicleDocumentEditForm)
