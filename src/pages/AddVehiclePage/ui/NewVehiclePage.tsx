import { useAuth } from 'app/providers/AuthContextProvider'
import { createNewVehiclesForUserId } from 'enteties/vehicle'
import EditVehicleForm, { editVehicleActions } from 'features/vehicle/vehicleEditForm'
import { useId } from 'react'
import { useNavigate } from 'react-router-dom'
import { FetchStatus } from 'shared/api'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { REQUEST_MESSAGES } from 'shared/defaults/text'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { checkIfExistErrors } from 'shared/lib/utils/checkIfExistErrors'
import Button, { ButtonCategoryType, ButtonMargin, ButtonTheme } from 'shared/ui/Button'
import './newVehiclePage.scss'

const NewVehiclePage = () => {
  const navigate = useNavigate()
  const formFields = useAppSelector((state) => state.editVehicle.formFields)
  const dispatch = useAppDispatch()
  const { currentUser } = useAuth()
  const formId = useId()
  const onSubmit = async () => {
    const { formFieldsWithErrors, isErrors } = checkIfExistErrors(formFields)
    if (isErrors) return dispatch(editVehicleActions.changeVehicleDataAC(formFieldsWithErrors))
    const dispatchAction = await dispatch(
      createNewVehiclesForUserId({
        vehicleFormData: formFieldsWithErrors,
        userId: currentUser!.uid,
        notification: REQUEST_MESSAGES.SAVE_NEW_VEHICLE,
      }),
    )
    if (dispatchAction.meta.requestStatus === FetchStatus.SUCCESS) {
      editVehicleActions.resetVehicleDataAC()
      navigate(RoutePaths.garage)
    }
  }
  return (
    <div className='new-vehicle-page'>
      <EditVehicleForm formId={formId} onSubmit={onSubmit} />
      <div className='new-vehicle-page__footer'>
        <Button
          type='button'
          onClick={() => {
            dispatch(
              editVehicleActions.changeVehicleDataAC({
                files: {
                  ...formFields.files,
                  value: [],
                },
                type: {
                  ...formFields.type,
                  value: 1,
                },
                brand: {
                  ...formFields.brand,
                  value: 195,
                },
                model: {
                  ...formFields.model,
                  value: 1621,
                },
                yearOfProduction: {
                  ...formFields.yearOfProduction,
                  value: 2014,
                },
                registrationNumber: {
                  ...formFields.registrationNumber,
                  value: 'SNO406',
                },
                vin: {
                  ...formFields.vin,
                  value: 'SJNFAAJ11U1161796',
                },
                power: {
                  ...formFields.power,
                  value: '106',
                },
                cylinderCapacity: {
                  ...formFields.cylinderCapacity,
                  value: '1500',
                },
                numberOfSeats: {
                  ...formFields.numberOfSeats,
                  value: '5',
                },
                color: {
                  ...formFields.color,
                  value: 'black',
                },
                maximumAuthorisedMass: {
                  ...formFields.maximumAuthorisedMass,
                  value: '1700',
                },
                civSeries: {
                  ...formFields.civSeries,
                  value: 'hz cei asta civ',
                },
                ownedBy: {
                  ...formFields.ownedBy,
                  value: 1,
                },
                isLeasingVehicle: {
                  ...formFields.isLeasingVehicle,
                  value: true,
                },
                leasingCompany: {
                  ...formFields.leasingCompany,
                  value: 50,
                },
                summerTyreSize: {
                  ...formFields.summerTyreSize,
                  value: 43,
                },
                dotSummerTyre: {
                  ...formFields.dotSummerTyre,
                  value: 'hz cei dot',
                },
                winterTyreSize: {
                  ...formFields.winterTyreSize,
                  value: 3,
                },
                dotWinterTyre: {
                  ...formFields.dotWinterTyre,
                  value: 'hz cei dot',
                },
                fuelType: {
                  ...formFields.fuelType,
                  value: 2,
                },
                fuelConsumptionUrb: {
                  ...formFields.fuelConsumptionUrb,
                  value: '6',
                },
                fuelConsumptionMix: {
                  ...formFields.fuelConsumptionMix,
                  value: '5.5',
                },
                fuelConsumptionExtraUrb: {
                  ...formFields.fuelConsumptionExtraUrb,
                  value: '5',
                },
                usagePercentUrb: {
                  ...formFields.usagePercentUrb,
                  value: '20',
                },
                usagePercentMix: {
                  ...formFields.usagePercentMix,
                  value: '40',
                },
                usagePercentExtraUrb: {
                  ...formFields.usagePercentExtraUrb,
                  value: '40',
                },
              }),
            )
          }}
          category={ButtonCategoryType.BUTTON}
          theme={ButtonTheme.OUTLINE_BLUE}
          margin={ButtonMargin.BOTTOM}
        >
          Nissan q (TEST ONLY)
        </Button>
        <Button
          form={formId}
          type='submit'
          category={ButtonCategoryType.BUTTON}
          theme={ButtonTheme.OUTLINE_RED}
        >
          Salveaza
        </Button>
      </div>
    </div>
  )
}
export default NewVehiclePage
