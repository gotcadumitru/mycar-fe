import { ChangeEvent, FC, useState } from 'react'
import { toast } from 'react-toastify'
import {
  TOAST_MESSAGE,
  INPUT_LABEL,
  INPUT_PLACEHOLDER,
  MODAL_TITLE,
  SECTION_TITLE,
} from 'shared/defaults/text'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import Form from 'shared/ui/Form'
import Input, { OnChangeMinType } from 'shared/ui/Input'
import InputSelect from 'shared/ui/InputSelect'
import { Section } from 'shared/ui/Section'
import StepSlider from 'shared/ui/StepSlider'
import TextArea from 'shared/ui/TextArea'
import { ConfirmModal } from 'widgets/ConfirmModal'
import { INDICATED_LANGUAGE_OPTIONS } from '../lib/createDictionary.defaults'
import { createDictionaryActions } from '../lib/createDictionarySlice'
import {
  InfoBoxDescription,
  InfoBoxDictionaryTerm,
  InfoBoxIndicatedLanguage,
  InfoBoxWeighting,
} from '../lib/info-boxes'

interface DictionaryCreateFormProps {
  formId: string
}

export const DictionaryCreateForm: FC<DictionaryCreateFormProps> = ({ formId }) => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

  const createDictionaryFormData = useAppSelector(
    (state) => state.createDictionary.newDictionaryFormData,
  )
  const dispatch = useAppDispatch()
  const onInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> | OnChangeMinType,
  ) => {
    const { value } = e.target
    const name = e.target.name as keyof typeof createDictionaryFormData
    dispatch(
      createDictionaryActions.changeDictionaryDataAC({
        ...createDictionaryFormData,
        [name]: {
          ...createDictionaryFormData[name],
          value,
        },
      }),
    )
  }
  const onConfirmSaveDictionary = () => {
    setIsConfirmModalOpen(false)
    toast.error(TOAST_MESSAGE.NOT_IMPLEMENTED)
  }
  const onFormSubmit = () => {
    if (createDictionaryFormData.weighting.value === 0) {
      setIsConfirmModalOpen(true)
    }
  }
  return (
    <Form id={formId} onSubmit={onFormSubmit}>
      {isConfirmModalOpen && (
        <ConfirmModal
          title={MODAL_TITLE.SAVE_DICTIONARY_TERM}
          questionText={
            <div>
              <div>A dictionary term with a weighting of</div>
              <div>zero will have no effect on transcriptions.</div>

              <p>Are you sure you want to continue?</p>
            </div>
          }
          onConfirm={onConfirmSaveDictionary}
          onClose={() => setIsConfirmModalOpen(false)}
        />
      )}
      <Section title={SECTION_TITLE.DICTIONARY_TERM}>
        <div className='dictionary-create__two-dropdowns'>
          <Input
            valueFullType={createDictionaryFormData.term}
            name='term'
            onChange={onInputChange}
            placeholder={INPUT_PLACEHOLDER.DICTIONARY_TERM}
            label={INPUT_LABEL.DICTIONARY_TERM}
            infoText={InfoBoxDictionaryTerm}
          />
          <InputSelect
            valueFullType={createDictionaryFormData.language}
            name='language'
            onChange={onInputChange}
            placeholder={INPUT_PLACEHOLDER.SELECT_OPTION}
            label={INPUT_LABEL.WHAT_LANGUAGE}
            options={INDICATED_LANGUAGE_OPTIONS}
            infoText={InfoBoxIndicatedLanguage}
          />
        </div>
        <TextArea
          valueFullType={createDictionaryFormData.description}
          name='description'
          onChange={onInputChange}
          placeholder={INPUT_PLACEHOLDER.DICTIONARY_DESCRIPTION}
          label={INPUT_LABEL.DICTIONARY_DESCRIPTION}
          infoText={InfoBoxDescription}
        />
      </Section>
      <Section title={SECTION_TITLE.WEIGHTING}>
        <StepSlider
          onChange={onInputChange}
          name='weighting'
          label={INPUT_LABEL.SELECT_WEIGHTING}
          infoTextLeft={INPUT_LABEL.NEVER_MATCH}
          infoTextRight={INPUT_LABEL.ALWAYS_MATCH}
          infoText={InfoBoxWeighting}
          value={createDictionaryFormData.weighting.value}
          min={-10}
          step={1}
          max={10}
        />
      </Section>
    </Form>
  )
}
