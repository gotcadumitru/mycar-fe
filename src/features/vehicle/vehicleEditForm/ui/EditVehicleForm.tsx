import { getVehicleFormValues } from 'enteties/vehicle'
import FuelTypesSelect from 'features/fuelTypesSelect'
import LeasingCompaniesSelect from 'features/leasingCompaniesSelect'
import OwnershipTypesSelect from 'features/ownershipTypesSelect'
import TyreSizeSelect from 'features/tyreSizeSelect'
import VehicleBrandSelect from 'features/vehicleBrandSelect'
import ModelTypesSelect from 'features/vehicleModelSelect'
import VehicleTypesSelect from 'features/vehicleTypesSelect'
import VehicleYearSelect from 'features/vehicleYearSelect'
import { ChangeEvent, FC, memo } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { checkIfExistErrors } from 'shared/lib/utils/checkIfExistErrors'
import Checkbox from 'shared/ui/Checkbox'
import type { FileInputType } from 'shared/ui/File'
import FileInput from 'shared/ui/FileInput'
import Form from 'shared/ui/Form'
import Input, { OnChangeMinType } from 'shared/ui/Input'
import Label from 'shared/ui/Label'
import { editVehicleActions } from '../lib/slice/editVehicleSlice'
import '../styles/edit-vehicle.scss'

interface EditCarFormProps {
  formId: string
  onSubmit: () => void
}

const EditVehicleForm: FC<EditCarFormProps> = ({ formId, onSubmit }) => {
  const formFields = useAppSelector((state) => state.editVehicle.formFields)
  const dispatch = useAppDispatch()
  const onInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | OnChangeMinType,
    keysToReset: (keyof typeof formFields)[] = [],
  ) => {
    const { value } = event.target
    const name = event.target.name as keyof typeof formFields

    const vehicleInitialValues = getVehicleFormValues({})
    const newData = keysToReset.reduce(
      (formData, key) => ({
        ...formData,
        [key]: vehicleInitialValues[key],
      }),
      {
        ...formFields,
        [name]: {
          ...formFields[name],
          value,
          errorMessage: '',
        },
      },
    )
    dispatch(editVehicleActions.changeVehicleDataAC(newData))
  }

  const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    const name = event.target.name as keyof typeof formFields
    dispatch(
      editVehicleActions.changeVehicleDataAC({
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
      editVehicleActions.changeVehicleDataAC({
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
    if (isErrors) return dispatch(editVehicleActions.changeVehicleDataAC(formFieldsWithErrors))
    onSubmit()
  }
  return (
    <Form id={formId} onSubmit={onSubmitLocal} className='edit-vehicle'>
      <FileInput
        valueFullType={formFields.files}
        onChange={handleChangeInputFile}
        label='Selecteaza poze'
      />
      <VehicleTypesSelect
        valueFullType={formFields.type}
        name='type'
        onChange={(e) => onInputChange(e, ['brand', 'model'])}
        label='Tip vehicul'
      />
      <VehicleBrandSelect
        vehicleTypeId={formFields.type.value}
        valueFullType={formFields.brand}
        name='brand'
        onChange={(e) => onInputChange(e, ['model'])}
        label='Marca'
      />
      <ModelTypesSelect
        vehicleTypeId={formFields.type.value}
        vehicleBrandId={formFields.brand.value}
        valueFullType={formFields.model}
        name='model'
        onChange={onInputChange}
        label='Model'
      />
      <VehicleYearSelect
        valueFullType={formFields.yearOfProduction}
        name='yearOfProduction'
        onChange={onInputChange}
        label='Anul de fabricatie'
      />
      <Input
        valueFullType={formFields.registrationNumber}
        name='registrationNumber'
        onChange={onInputChange}
        label='Numar de inmatriculare'
      />
      <Input
        valueFullType={formFields.vin}
        name='vin'
        onChange={onInputChange}
        label='Serie de sasiu (VIN)'
      />
      <Input
        valueFullType={formFields.power}
        name='power'
        type='number'
        onChange={onInputChange}
        label='Putere - KW'
      />
      <Input
        valueFullType={formFields.cylinderCapacity}
        name='cylinderCapacity'
        type='number'
        onChange={onInputChange}
        label='Capacitate cilindrica - CC'
      />

      <Input
        valueFullType={formFields.numberOfSeats}
        name='numberOfSeats'
        type='number'
        onChange={onInputChange}
        label='Numar locuri'
      />
      <Input
        valueFullType={formFields.color}
        name='color'
        onChange={onInputChange}
        label='Culoarea vehiculului'
      />
      <Input
        valueFullType={formFields.maximumAuthorisedMass}
        name='maximumAuthorisedMass'
        onChange={onInputChange}
        type='number'
        label='Masa maxima autorizata'
      />
      <Input
        valueFullType={formFields.civSeries}
        name='civSeries'
        onChange={onInputChange}
        label='Seria CIV'
      />
      <OwnershipTypesSelect
        valueFullType={formFields.ownedBy}
        name='ownedBy'
        onChange={onInputChange}
        label='Detinut de'
      />
      <Checkbox
        valueFullType={formFields.isLeasingVehicle}
        name='isLeasingVehicle'
        onChange={onCheckboxChange}
        isBig
        label='Vehicul in leasing'
      />
      {formFields.isLeasingVehicle.value && (
        <LeasingCompaniesSelect
          valueFullType={formFields.leasingCompany}
          name='leasingCompany'
          onChange={onInputChange}
          label='Alege compania de leasing'
        />
      )}
      <TyreSizeSelect
        vehicleTypeId={formFields.type.value}
        valueFullType={formFields.summerTyreSize}
        name='summerTyreSize'
        onChange={onInputChange}
        label='Marimea anvelopelor de vara'
      />
      <Input
        valueFullType={formFields.dotSummerTyre}
        name='dotSummerTyre'
        onChange={onInputChange}
        label='DOT anvelope vara'
      />
      <TyreSizeSelect
        vehicleTypeId={formFields.type.value}
        valueFullType={formFields.winterTyreSize}
        name='winterTyreSize'
        onChange={onInputChange}
        label='Marimea anvelopelor de iarna'
      />
      <Input
        valueFullType={formFields.dotWinterTyre}
        name='dotWinterTyre'
        onChange={onInputChange}
        label='DOT anvelope iarna'
      />
      <FuelTypesSelect
        valueFullType={formFields.fuelType}
        name='fuelType'
        onChange={onInputChange}
        label='Tip combustibil'
      />
      <Label label='Consum' className='label--mb' />
      <div className='edit-vehicle__two'>
        <Input
          valueFullType={formFields.fuelConsumptionUrb}
          type='number'
          name='fuelConsumptionUrb'
          label='Urban'
          onChange={onInputChange}
        />
        <Input
          valueFullType={formFields.fuelConsumptionExtraUrb}
          type='number'
          name='fuelConsumptionExtraUrb'
          label='Extra urban'
          onChange={onInputChange}
        />
      </div>
      <Label label='Procent utilizare' className='label--mb' />
      <div className='edit-vehicle__two'>
        <Input
          valueFullType={formFields.usagePercentUrb}
          type='number'
          label='Urban'
          name='usagePercentUrb'
          onChange={onInputChange}
        />
        <Input
          valueFullType={formFields.usagePercentExtraUrb}
          type='number'
          label='Extra urban'
          name='usagePercentExtraUrb'
          onChange={onInputChange}
        />
      </div>
    </Form>
  )
}

export default memo(EditVehicleForm)
