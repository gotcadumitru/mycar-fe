import EditCarForm from 'features/car/car-edit-form'
import { useId } from 'react'
import { useNavigate } from 'react-router-dom'
import Button, { ButtonCategoryType, ButtonTheme } from 'shared/ui/Button'
import './newCarPage.scss'

const NewCarPage = () => {
  const navigate = useNavigate()
  const formId = useId()
  return (
    <div className='new-car-page'>
      <EditCarForm formId={formId} onSubmit={alert} />
      <div className='new-car-page__footer'>
        <Button
          form={formId}
          type='submit'
          category={ButtonCategoryType.BUTTON}
          theme={ButtonTheme.BLUE}
        >
          Salveaza
        </Button>
      </div>
    </div>
  )
}
export default NewCarPage
