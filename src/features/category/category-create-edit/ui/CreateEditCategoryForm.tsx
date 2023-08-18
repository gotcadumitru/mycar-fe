import { WhenShouldHappen } from 'enteties/category'
import { ChangeEvent, FC, memo } from 'react'
import { CSSTransition } from 'react-transition-group'
import { INPUT_LABEL, INPUT_PLACEHOLDER, SECTION_TITLE } from 'shared/defaults/text'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import Form from 'shared/ui/Form'
import Input, { OnChangeMinType } from 'shared/ui/Input'
import InputSelect from 'shared/ui/InputSelect'
import { Section } from 'shared/ui/Section'
import TextArea from 'shared/ui/TextArea'
import TimePicker from 'shared/ui/TimePicker'
import {
  InfoBoxCategoryName,
  InfoBoxDescription,
  InfoBoxLanguage,
  InfoBoxWhenShouldHappen,
  InfoBoxWhereToHappen,
  InfoBoxWhoToSay,
  InfoBoxWordsOrPhrases,
} from '../lib/info-boxes'
import { createEditCategoryActions } from '../lib/slice/createEditCategorySlice'
import {
  TRANSCRIPTION_LANGUAGE_OPTIONS,
  WHEN_SHOULD_HAPPEN_OPTIONS,
  WHERE_TO_HAPPEN_OPTIONS,
  WHO_APPLY_TO,
} from '../model/consts/createEditCategoryConsts'

interface CreateCategoryFormProps {
  formId: string
  onSubmit: () => void
}

const CreateEditCategoryForm: FC<CreateCategoryFormProps> = ({ formId, onSubmit }) => {
  const createCategoryFormData = useAppSelector((state) => state.createCategory.newCategoryFormData)
  const dispatch = useAppDispatch()

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> | OnChangeMinType,
  ) => {
    const { value } = e.target
    const name = e.target.name as keyof typeof createCategoryFormData
    dispatch(
      createEditCategoryActions.changeCategoryDataAC({
        ...createCategoryFormData,
        [name]: {
          ...createCategoryFormData[name],
          value,
          errorMessage: '',
        },
      }),
    )
  }
  return (
    <Form id={formId} onSubmit={onSubmit}>
      <Section title={SECTION_TITLE.CATEGORY_ATTRIBUTES}>
        <div className='create-category__two-dropdowns'>
          <Input
            valueFullType={createCategoryFormData.name}
            name='name'
            onChange={onInputChange}
            placeholder={INPUT_PLACEHOLDER.CATEGORY_NAME}
            label={INPUT_LABEL.CATEGORY_NAME}
            infoText={InfoBoxCategoryName}
          />
          <InputSelect
            valueFullType={createCategoryFormData.language}
            name='language'
            onChange={onInputChange}
            placeholder={INPUT_PLACEHOLDER.SELECT_OPTION}
            label={INPUT_LABEL.CATEGORY_LANGUAGE}
            options={TRANSCRIPTION_LANGUAGE_OPTIONS}
            infoText={InfoBoxLanguage}
          />
        </div>
        <TextArea
          valueFullType={createCategoryFormData.description}
          name='description'
          onChange={onInputChange}
          placeholder={INPUT_PLACEHOLDER.CATEGORY_DESCRIPTION}
          label={INPUT_LABEL.CATEGORY_DESCRIPTION}
          infoText={InfoBoxDescription}
        />
      </Section>
      <Section title={SECTION_TITLE.CATEGORY_WORDS_PHRASES}>
        <TextArea
          valueFullType={createCategoryFormData.wordsOrPhrases}
          name='wordsOrPhrases'
          onChange={onInputChange}
          placeholder={INPUT_PLACEHOLDER.WORDS_OR_PHRASES}
          label={INPUT_LABEL.WORDS_OR_PHRASES}
          infoText={InfoBoxWordsOrPhrases}
        />
        <div className='create-category__two-dropdowns'>
          <InputSelect
            valueFullType={createCategoryFormData.toWhomDoesItApply}
            name='toWhomDoesItApply'
            onChange={onInputChange}
            placeholder={INPUT_PLACEHOLDER.SELECT_OPTION}
            label={INPUT_LABEL.WHO_APPLY_TO}
            options={WHO_APPLY_TO}
            infoText={InfoBoxWhoToSay}
          />
          <InputSelect
            valueFullType={createCategoryFormData.whereNeedToHappen}
            name='whereNeedToHappen'
            onChange={onInputChange}
            placeholder={INPUT_PLACEHOLDER.SELECT_OPTION}
            label={INPUT_LABEL.WHERE_TO_HAPPEN}
            options={WHERE_TO_HAPPEN_OPTIONS}
            infoText={InfoBoxWhereToHappen}
          />
        </div>
        <div className='create-category__two-dropdowns'>
          <InputSelect
            valueFullType={createCategoryFormData.whenShouldItHappen}
            name='whenShouldItHappen'
            onChange={onInputChange}
            placeholder={INPUT_PLACEHOLDER.SELECT_OPTION}
            label={INPUT_LABEL.WHEN_SHOULD_HAPPEN}
            options={WHEN_SHOULD_HAPPEN_OPTIONS}
            infoText={InfoBoxWhenShouldHappen}
          />
          <CSSTransition
            in={[WhenShouldHappen.END, WhenShouldHappen.BEGINNING].includes(
              createCategoryFormData.whenShouldItHappen.value,
            )}
            unmountOnExit
            classNames='timepickeranimation'
            addEndListener={() => {}}
          >
            <TimePicker
              valueFullType={createCategoryFormData.howLongTime}
              name='howLongTime'
              onChange={onInputChange}
              placeholder={INPUT_PLACEHOLDER.SELECT_TIME}
              label={
                WhenShouldHappen.BEGINNING === createCategoryFormData.whenShouldItHappen.value
                  ? INPUT_LABEL.HOW_LONG_INTO
                  : INPUT_LABEL.HOW_LONG_BEFORE
              }
              isShowHours={false}
            />
          </CSSTransition>
        </div>
      </Section>
      {/*do not remove*/}
      {/*<Section title='Who does this Category Apply to?'>*/}
      {/*  <UsersTable />*/}
      {/*  <GroupsTable />*/}
      {/*</Section>*/}
    </Form>
  )
}

export default memo(CreateEditCategoryForm)
