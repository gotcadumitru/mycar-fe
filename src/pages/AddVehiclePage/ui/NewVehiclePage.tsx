import { useAuth } from 'app/providers/AuthContextProvider'
import { createNewVehiclesForUserId } from 'enteties/vehicle/model/slice/vehicleThunks'
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
                type: {
                  value: 1,
                  errorMessage: '',
                  validations: [],
                },
                brand: {
                  value: 195,
                  errorMessage: '',
                  validations: [],
                },
                model: {
                  value: 1621,
                  errorMessage: '',
                  validations: [],
                },
                yearOfProduction: {
                  value: 2014,
                  errorMessage: '',
                  validations: [],
                },
                registrationNumber: {
                  value: 'SNO406',
                  errorMessage: '',
                  validations: [],
                },
                vin: {
                  value: 'SJNFAAJ11U1161796',
                  errorMessage: '',
                  validations: [],
                },
                power: {
                  value: '106',
                  errorMessage: '',
                  validations: [],
                },
                cylinderCapacity: {
                  value: '1500',
                  errorMessage: '',
                  validations: [],
                },
                numberOfSeats: {
                  value: '5',
                  errorMessage: '',
                  validations: [],
                },
                color: {
                  value: 'black',
                  errorMessage: '',
                  validations: [],
                },
                maximumAuthorisedMass: {
                  value: '1700',
                  errorMessage: '',
                  validations: [],
                },
                civSeries: {
                  value: 'hz cei asta civ',
                  errorMessage: '',
                  validations: [],
                },
                ownedBy: {
                  value: 1,
                  errorMessage: '',
                  validations: [],
                },
                isLeasingVehicle: {
                  value: false,
                  errorMessage: '',
                  validations: [],
                },
                leasingCompany: {
                  value: 50,
                  errorMessage: '',
                  validations: [],
                },
                summerTyreSize: {
                  value: 43,
                  errorMessage: '',
                  validations: [],
                },
                dotSummerTyre: {
                  value: 'hz cei dot',
                  errorMessage: '',
                  validations: [],
                },
                winterTyreSize: {
                  value: 3,
                  errorMessage: '',
                  validations: [],
                },
                dotWinterTyre: {
                  value: 'hz cei dot',
                  errorMessage: '',
                  validations: [],
                },
                fuelType: {
                  value: 2,
                  errorMessage: '',
                  validations: [],
                },
                fuelConsumptionUrb: {
                  value: '6',
                  errorMessage: '',
                  validations: [],
                },
                fuelConsumptionMix: {
                  value: '5.5',
                  errorMessage: '',
                  validations: [],
                },
                fuelConsumptionExtraUrb: {
                  value: '5',
                  errorMessage: '',
                  validations: [],
                },
                usagePercentUrb: {
                  value: '20',
                  errorMessage: '',
                  validations: [],
                },
                usagePercentMix: {
                  value: '40',
                  errorMessage: '',
                  validations: [],
                },
                usagePercentExtraUrb: {
                  value: '40',
                  errorMessage: '',
                  validations: [],
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
