import { ChangeEvent, FC, memo } from 'react'
import { SECTION_TITLE } from 'shared/defaults/text'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import Checkbox from 'shared/ui/Checkbox'
import Form from 'shared/ui/Form'
import Input from 'shared/ui/Input'
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

  const onInputChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target
    const name = event.target.name as keyof typeof formFields
    dispatch(
      editCarActions.changeCarDataAC({
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
      <Section title={SECTION_TITLE.CAR}>section car</Section>
      <Input
        valueFullType={formFields.type}
        name='type'
        onChange={onInputChange}
        label='Tip vehicul'
      />
      <Input valueFullType={formFields.mark} name='mark' onChange={onInputChange} label='Marca' />
      <Input valueFullType={formFields.model} name='model' onChange={onInputChange} label='Model' />
      <Input
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
      <Input
        valueFullType={formFields.ownedBy}
        name='ownedBy'
        onChange={onInputChange}
        label='Detinut de'
      />
      <Checkbox
        valueFullType={formFields.isLeasingVehicle}
        name='isLeasingVehicle'
        onChange={onCheckboxChange}
        label='Vehicul in leasing'
      />
      <Input
        valueFullType={formFields.leasingCompany}
        name='leasingCompany'
        onChange={onInputChange}
        label='Alege compania de leasing'
      />
      <Input
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
      <Input
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
      <Input
        valueFullType={formFields.fuelConsumptionUrb}
        type='number'
        name='fuelConsumptionUrb'
        onChange={onInputChange}
        label='Tip vehicul'
      />
      <Input
        valueFullType={formFields.fuelConsumptionMix}
        type='number'
        name='fuelConsumptionMix'
        onChange={onInputChange}
        label='Tip vehicul'
      />
      <Input
        valueFullType={formFields.fuelConsumptionExtraurb}
        type='number'
        name='fuelConsumptionExtraurb'
        onChange={onInputChange}
        label='Tip vehicul'
      />
      <Input
        valueFullType={formFields.usagePercentUrb}
        type='number'
        name='usagePercentUrb'
        onChange={onInputChange}
        label='Tip vehicul'
      />
      <Input
        valueFullType={formFields.usagePercentMix}
        type='number'
        name='usagePercentMix'
        onChange={onInputChange}
        label='Tip vehicul'
      />
      <Input
        valueFullType={formFields.usagePercentExtraurb}
        type='number'
        name='usagePercentExtraurb'
        onChange={onInputChange}
        label='Tip vehicul'
      />
    </Form>
  )
}

export default memo(EditCarForm)
