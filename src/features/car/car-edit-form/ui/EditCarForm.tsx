import { ChangeEvent, FC, memo } from 'react'
import { SECTION_TITLE } from 'shared/defaults/text'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import Form from 'shared/ui/Form'
import { OnChangeMinType } from 'shared/ui/Input'
import { Section } from 'shared/ui/Section'
import { editCarActions } from '../lib/slice/editCarSlice'
import '../styles/edit-car.scss'

interface EditCarFormProps {
  formId: string
  onSubmit: () => void
}

const EditCarForm: FC<EditCarFormProps> = ({ formId, onSubmit }) => {
  const newCarFormData = useAppSelector((state) => state.editCar.newCarFormData)
  const dispatch = useAppDispatch()

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> | OnChangeMinType,
  ) => {
    const { value } = e.target
    const name = e.target.name as keyof typeof newCarFormData
    dispatch(
      editCarActions.changeCarDataAC({
        ...newCarFormData,
        [name]: {
          ...newCarFormData[name],
          value,
          errorMessage: '',
        },
      }),
    )
  }
  return (
    <Form id={formId} onSubmit={onSubmit}>
      <Section title={SECTION_TITLE.CAR}>section car</Section>
    </Form>
  )
}

export default memo(EditCarForm)
