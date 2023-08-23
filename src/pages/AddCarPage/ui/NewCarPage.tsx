import EditCarForm from 'features/car/car-edit-form';
import { useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import './newCarPage.scss'

const NewCarPage = () => {
  const navigate = useNavigate()
  const handlers = useSwipeable({
    onSwipedRight: () => navigate(-1),
  })
  return (
    <div {...handlers} className='new-car-page'>
      <EditCarForm formId="f" onSubmit={alert}/>
    </div>
  )
}
export default NewCarPage
