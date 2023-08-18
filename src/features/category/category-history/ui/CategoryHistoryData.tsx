import { FC } from 'react'
import { INPUT_LABEL, INPUT_PLACEHOLDER, SECTION_TITLE } from 'shared/defaults/text'
import { exportToCSV } from 'shared/lib/utils/exportToCSV'
import Autosuggestion from 'shared/ui/Autosuggest'
import Button, { ButtonSize } from 'shared/ui/Button'
import Checkbox from 'shared/ui/Checkbox'
import Input, { InputUiType } from 'shared/ui/Input'
import Label from 'shared/ui/Label'
import { Section } from 'shared/ui/Section'
import {
  categoryHistoryMockData,
  categoryHistoryTableHeaderItems,
} from '../lib/category-history.defaults'
import { CategoryHistoryTable } from './CategoryHistoryTable'

interface CategoryHistoryDataProps {
  className?: string
}

export const CategoryHistoryData: FC<CategoryHistoryDataProps> = () => (
  <div className='modal__body'>
    <Section title={SECTION_TITLE.CATEGORY_HISTORY}>
      <div className='category-history__data-range'>
        <Label label={INPUT_LABEL.DATE_RANGE} className='category-history__left-label' />
        <Input type='date' label={INPUT_LABEL.FROM} />
        <Input type='date' label={INPUT_LABEL.TO} />
      </div>
      <div className='category-history__label-input'>
        <Label label={INPUT_LABEL.CHANGE_MADE_BY} className='category-history__left-label' />
        <Autosuggestion
          options={[]}
          placeholder={INPUT_PLACEHOLDER.SEARCH}
          uiType={InputUiType.SIMPLE}
        />
        <div />
      </div>
      <div className='category-history__label-input'>
        <Label label={INPUT_LABEL.TERM} className='category-history__left-label' />
        <Autosuggestion
          options={[]}
          placeholder={INPUT_PLACEHOLDER.SEARCH}
          uiType={InputUiType.SIMPLE}
        />
        <div />
      </div>
      <div className='category-history__label-input'>
        <Label label={INPUT_LABEL.LIMIT} className='category-history__left-label' />
        <Input containerClassName='category-history__limit' type='number' min={1} step={1} />
      </div>
      <div className='category-history__label-input category-history__label-input--checkbox'>
        <Label
          label={INPUT_LABEL.INCLUDE_DELETED_CATEGORIES}
          className='category-history__left-label'
        />
        <Checkbox isGrey />
      </div>
      <div className='category-history__search-export'>
        <Autosuggestion
          options={[]}
          placeholder={INPUT_PLACEHOLDER.SEARCH}
          uiType={InputUiType.SIMPLE}
        />
        <Button
          size={ButtonSize.INPUT_SIZE}
          onClick={() => {
            const csv: string[] = []
            const csvHeader = categoryHistoryTableHeaderItems
              .slice(0, 5)
              .map((history) => history.id.toString())
              .join(',')

            csv.push(csvHeader)

            csv.push(
              ...categoryHistoryMockData.map(
                (history) =>
                  `${history.dateTime},${history.categoryName},${history.createdBy},${history.modifiedBy},${history.changelog}`,
              ),
            )
            exportToCSV(csv.join('\n'), 'test.csv')
          }}
        >
          Export
        </Button>
      </div>
      <CategoryHistoryTable />
    </Section>
  </div>
)
