import { FC } from 'react'
import { BUTTON_TEXT, INPUT_LABEL, INPUT_PLACEHOLDER, SECTION_TITLE } from 'shared/defaults/text'
import { exportToCSV } from 'shared/lib/utils/exportToCSV'
import Autosuggestion from 'shared/ui/Autosuggest'
import Button, { ButtonSize } from 'shared/ui/Button'
import Checkbox from 'shared/ui/Checkbox'
import Input, { InputUiType } from 'shared/ui/Input'
import Label from 'shared/ui/Label'
import { Section } from 'shared/ui/Section'
import {
  dictionaryHistoryMockData,
  dictionaryHistoryTableHeaderItems,
} from '../lib/dictionary-history.defaults'
import { DictionaryHistoryTable } from './DictionaryHistoryTable'

interface DictionaryHistoryDataProps {
  className?: string
}

export const DictionaryHistoryData: FC<DictionaryHistoryDataProps> = () => (
  <div className='modal__body'>
    <Section title={SECTION_TITLE.DICTIONARY_HISTORY}>
      <div className='dictionary-history__data-range'>
        <Label label={INPUT_LABEL.DATE_RANGE} className='dictionary-history__left-label' />
        <Input type='date' label={INPUT_LABEL.FROM} />
        <Input type='date' label={INPUT_LABEL.TO} />
      </div>
      <div className='dictionary-history__label-input'>
        <Label label={INPUT_LABEL.CHANGE_MADE_BY} className='dictionary-history__left-label' />
        <Autosuggestion
          options={[]}
          placeholder={INPUT_PLACEHOLDER.SEARCH}
          uiType={InputUiType.SIMPLE}
        />
        <div />
      </div>
      <div className='dictionary-history__label-input'>
        <Label label={INPUT_LABEL.TERM} className='dictionary-history__left-label' />
        <Autosuggestion
          options={[]}
          placeholder={INPUT_PLACEHOLDER.SEARCH}
          uiType={InputUiType.SIMPLE}
        />
        <div />
      </div>
      <div className='dictionary-history__label-input'>
        <Label label={INPUT_LABEL.LIMIT} className='dictionary-history__left-label' />
        <Input containerClassName='dictionary-history__limit' type='number' min={1} step={1} />
      </div>
      <div className='dictionary-history__label-input dictionary-history__label-input--checkbox'>
        <Label
          label={INPUT_LABEL.INCLUDE_DELETED_DICTIONARIES}
          className='dictionary-history__left-label'
        />
        <Checkbox isGrey />
      </div>
      <div className='dictionary-history__search-export'>
        <Autosuggestion
          options={[]}
          placeholder={INPUT_PLACEHOLDER.SEARCH}
          uiType={InputUiType.SIMPLE}
        />
        <Button
          size={ButtonSize.INPUT_SIZE}
          onClick={() => {
            const csv: string[] = []
            const csvHeader = dictionaryHistoryTableHeaderItems
              .slice(0, 5)
              .map((history) => history.id.toString())
              .join(',')

            csv.push(csvHeader)

            csv.push(
              ...dictionaryHistoryMockData.map(
                (history) =>
                  `${history.dateTime},${history.dictionaryTerm},${history.createdBy},${history.modifiedBy},${history.changelog}`,
              ),
            )
            exportToCSV(csv.join('\n'), 'test.csv')
          }}
        >
          {BUTTON_TEXT.EXPORT}
        </Button>
      </div>
      <DictionaryHistoryTable />
    </Section>
  </div>
)
