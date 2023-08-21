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
      Hai sa adaugam niste detalii
      {/*<Input*/}
      {/*    valueFullType={createCategoryFormData.language}*/}
      {/*    name='language'*/}
      {/*    onChange={onInputChange}*/}
      {/*    placeholder={INPUT_PLACEHOLDER.SELECT_OPTION}*/}
      {/*    label={INPUT_LABEL.CAR_NAME}*/}
      {/*    infoText={InfoBoxLanguage}*/}
    </div>
  )
}
export default NewCarPage
