import axios from 'axios'
import { CarOwnedByOptions } from 'enteties/car'
import { ChangeEvent, FC, memo, useEffect, useState } from 'react'
import { SECTION_TITLE } from 'shared/defaults/text'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import Checkbox from 'shared/ui/Checkbox'
import Form from 'shared/ui/Form'
import Input, { InputOptionType } from 'shared/ui/Input'
import InputSelect from 'shared/ui/InputSelect'
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
  const [options, setOptions] = useState<InputOptionType<number>[]>([])
  //
  // useEffect(() => {
  //   ;(async () => {
  //
  //     const vehicleTypesResp = await axios.get(
  //       'https://app.my-car.site/backend/api/v1/vehicles/dropdown/vehicleTypes',
  //       {
  //         headers: {
  //           Authorization:
  //             'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkR1bWl0cnUuZ290Y2FAc3R1ZGVudC51c3Yucm8iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI5MjBmMjkwNi1jODAxLTRlMzEtYjUxMi1jYWQyNDEwZGE5ZGUiLCJyb2xlIjoiVXNlciIsImp0aSI6IjI1M2JiNGEyLWNkMDctNGZkZS04YTM3LTlkOWRjMDJkZjc5NCIsInN1YiI6IkR1bWl0cnUuZ290Y2FAc3R1ZGVudC51c3Yucm8iLCJuYmYiOjE2OTI4NzAxMjIsImV4cCI6MTY5NTQ2MjEyMiwiaWF0IjoxNjkyODcwMTIyLCJpc3MiOiJNeUNhciIsImF1ZCI6Ik15Q2FyIn0.iCXIUiWGMaZ4aBqrVwOj55kpqxvcWdegQNYy91FOtpY',
  //         },
  //       },
  //     )
  //
  //     const data = []
  //
  //     for (let i = 0; i < vehicleTypesResp.data.length; i += 1) {
  //       const vehicleType = vehicleTypesResp.data[i]
  //       const tireSizesResp = await axios.get(
  //         `https://app.my-car.site/backend/api/v1/vehicles/dropdown/tireSizes/${vehicleType.id}`,
  //         {
  //           headers: {
  //             Authorization:
  //               'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkR1bWl0cnUuZ290Y2FAc3R1ZGVudC51c3Yucm8iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI5MjBmMjkwNi1jODAxLTRlMzEtYjUxMi1jYWQyNDEwZGE5ZGUiLCJyb2xlIjoiVXNlciIsImp0aSI6IjI1M2JiNGEyLWNkMDctNGZkZS04YTM3LTlkOWRjMDJkZjc5NCIsInN1YiI6IkR1bWl0cnUuZ290Y2FAc3R1ZGVudC51c3Yucm8iLCJuYmYiOjE2OTI4NzAxMjIsImV4cCI6MTY5NTQ2MjEyMiwiaWF0IjoxNjkyODcwMTIyLCJpc3MiOiJNeUNhciIsImF1ZCI6Ik15Q2FyIn0.iCXIUiWGMaZ4aBqrVwOj55kpqxvcWdegQNYy91FOtpY',
  //           },
  //         },
  //       )
  //       const vehicleBrandsResp = await axios.get(
  //         `https://app.my-car.site/backend/api/v1/vehicle-brands/${vehicleType.id}`,
  //         {
  //           headers: {
  //             Authorization:
  //               'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkR1bWl0cnUuZ290Y2FAc3R1ZGVudC51c3Yucm8iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI5MjBmMjkwNi1jODAxLTRlMzEtYjUxMi1jYWQyNDEwZGE5ZGUiLCJyb2xlIjoiVXNlciIsImp0aSI6IjI1M2JiNGEyLWNkMDctNGZkZS04YTM3LTlkOWRjMDJkZjc5NCIsInN1YiI6IkR1bWl0cnUuZ290Y2FAc3R1ZGVudC51c3Yucm8iLCJuYmYiOjE2OTI4NzAxMjIsImV4cCI6MTY5NTQ2MjEyMiwiaWF0IjoxNjkyODcwMTIyLCJpc3MiOiJNeUNhciIsImF1ZCI6Ik15Q2FyIn0.iCXIUiWGMaZ4aBqrVwOj55kpqxvcWdegQNYy91FOtpY',
  //           },
  //         },
  //       )
  //       for (let j = 0; j < vehicleBrandsResp.data.length; j += 1) {
  //         const vehicleBrand = vehicleBrandsResp.data[j]
  //         const vehicleModelsResp = await axios.get(
  //           `https://app.my-car.site/backend/api/v1/vehicle-models/dropdown/vehicleModelList?vehicleTypeId=${vehicleType.id}&brandId=${vehicleBrand.id}`,
  //           {
  //             headers: {
  //               Authorization:
  //                 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkR1bWl0cnUuZ290Y2FAc3R1ZGVudC51c3Yucm8iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI5MjBmMjkwNi1jODAxLTRlMzEtYjUxMi1jYWQyNDEwZGE5ZGUiLCJyb2xlIjoiVXNlciIsImp0aSI6IjI1M2JiNGEyLWNkMDctNGZkZS04YTM3LTlkOWRjMDJkZjc5NCIsInN1YiI6IkR1bWl0cnUuZ290Y2FAc3R1ZGVudC51c3Yucm8iLCJuYmYiOjE2OTI4NzAxMjIsImV4cCI6MTY5NTQ2MjEyMiwiaWF0IjoxNjkyODcwMTIyLCJpc3MiOiJNeUNhciIsImF1ZCI6Ik15Q2FyIn0.iCXIUiWGMaZ4aBqrVwOj55kpqxvcWdegQNYy91FOtpY',
  //             },
  //           },
  //         )
  //         vehicleBrandsResp.data.vehicleModels = vehicleModelsResp.data
  //           await new Promise((resolve)=>{
  //               setTimeout(resolve,500)
  //           })
  //       }
  //
  //       data.push({
  //         tyreSize: tireSizesResp.data,
  //         vehicleBrands: vehicleBrandsResp.data,
  //           ...vehicleType
  //       })
  //     }
  //     debugger
  //
  //     // setOptions(
  //     //   resp.data.Results.map((r: any) => ({
  //     //     value: r.Make_ID,
  //     //     label: r.Make_Name,
  //     //   })),
  //     // )
  //   })()
  // }, [])
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
      <InputSelect
        valueFullType={formFields.ownedBy}
        options={CarOwnedByOptions}
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
      <InputSelect
        valueFullType={formFields.fuelType}
        options={options}
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
    </Form>
  )
}

export default memo(EditCarForm)
