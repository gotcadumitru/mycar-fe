import { getCarFormValues } from 'enteties/car'
import { fetchAllVignetteCountriesThunk } from 'enteties/vignette'
import FuelTypesSelect from 'features/fuelTypesSelect'
import LeasingCompaniesSelect from 'features/leasingCompaniesSelect'
import OwnershipTypesSelect from 'features/ownershipTypesSelect'
import TyreSizeSelect from 'features/tyreSizeSelect'
import VehicleBrandSelect from 'features/vehicleBrandSelect'
import ModelTypesSelect from 'features/vehicleModelSelect'
import VehicleTypesSelect from 'features/vehicleTypesSelect'
import VehicleYearSelect from 'features/vehicleYearSelect'
import { ChangeEvent, FC, memo, useEffect } from 'react'
import { SECTION_TITLE } from 'shared/defaults/text'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import Checkbox from 'shared/ui/Checkbox'
import Form from 'shared/ui/Form'
import Input, { OnChangeMinType } from 'shared/ui/Input'
import Label from 'shared/ui/Label'
import { Section } from 'shared/ui/Section'
import { editCarActions } from '../lib/slice/editCarSlice'
import '../styles/edit-car.scss'

interface EditCarFormProps {
  formId: string
  onSubmit: () => void
}

const EditCarForm: FC<EditCarFormProps> = ({ formId, onSubmit }) => {
  const formFields = useAppSelector((state) => state.editCar.formFields)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllVignetteCountriesThunk())
  }, [])
  const onInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | OnChangeMinType,
    keysToReset: (keyof typeof formFields)[] = [],
  ) => {
    const { value } = event.target
    const name = event.target.name as keyof typeof formFields

    const carInitialValues = getCarFormValues({})
    const newData = keysToReset.reduce(
      (formData, key) => {
        return {
          ...formData,
          [key]: carInitialValues[key],
        }
      },
      {
        ...formFields,
        [name]: {
          ...formFields[name],
          value,
          errorMessage: '',
        },
      },
    )
    dispatch(editCarActions.changeCarDataAC(newData))
  }

  const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    const name = event.target.name as keyof typeof formFields
    dispatch(
      editCarActions.changeCarDataAC({
        ...formFields,
        [name]: {
          ...formFields[name],
          value: checked,
          errorMessage: '',
        },
      }),
    )
  }
  return (
    <Form id={formId} onSubmit={onSubmit}>
      <Section title={SECTION_TITLE.NEW_CAR}>
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
          onChange={onInputChange}
          label='Putere - KW'
        />
        <Input
          valueFullType={formFields.cylinderCapacity}
          name='cylinderCapacity'
          onChange={onInputChange}
          label='Capacitate cilindrica - CC'
        />
        <Input
          valueFullType={formFields.numberOfSeats}
          name='numberOfSeats'
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
          isGrey
          label='Vehicul in leasing'
        />
        <LeasingCompaniesSelect
          valueFullType={formFields.leasingCompany}
          name='leasingCompany'
          onChange={onInputChange}
          label='Alege compania de leasing'
        />
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
          label='Marimea anvelopelor de iarn'
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
        <Label label='Consum (Urb/Mix/Exraurb)' />
        <div className='edit-car__three'>
          <Input
            valueFullType={formFields.fuelConsumptionUrb}
            type='number'
            name='fuelConsumptionUrb'
            onChange={onInputChange}
          />
          <Input
            valueFullType={formFields.fuelConsumptionMix}
            type='number'
            name='fuelConsumptionMix'
            onChange={onInputChange}
          />
          <Input
            valueFullType={formFields.fuelConsumptionExtraUrb}
            type='number'
            name='fuelConsumptionExtraUrb'
            onChange={onInputChange}
          />
        </div>
        <Label label='Procent utilizare (Urb/Mix/Exraurb)' />
        <div className='edit-car__three'>
          <Input
            valueFullType={formFields.usagePercentUrb}
            type='number'
            name='usagePercentUrb'
            onChange={onInputChange}
          />
          <Input
            valueFullType={formFields.usagePercentMix}
            type='number'
            name='usagePercentMix'
            onChange={onInputChange}
          />
          <Input
            valueFullType={formFields.usagePercentExtraUrb}
            type='number'
            name='fuelConsumptionExtraUrb'
            onChange={onInputChange}
          />
        </div>
      </Section>
    </Form>
  )
}

export default memo(EditCarForm)
