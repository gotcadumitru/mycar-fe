import { WhenShouldHappen } from 'enteties/category'
import { FC } from 'react'
import Highlighter from 'react-highlight-words'
import { INPUT_LABEL, SECTION_TITLE } from 'shared/defaults/text'
import Label from 'shared/ui/Label'
import { Section } from 'shared/ui/Section'

interface ViewCategoryDataProps {
  className?: string
}

const category = {
  categoryName: 'The Naughty Words Category',
  indicatedLanguage: 'English',
  description:
    'Profanity, also known as cursing, cussing, swearing, bad language, foul language, obscenities, expletives or vulgarism, is a socially offensive use of language. Accordingly, profanity is language use that is sometimes deemed impolite, rude, indecent, or culturally offensive',
  wardsAndPhrases:
    // eslint-disable-next-line quotes
    "'Cat', 'dog', 'I love my brick' AND ('Down with this sort of thing' OR 'Careful now') AND meow",
  whoNeedsToSayOrNotSay: 'Either Party',
  saidOrNotSaid: 'Said',
  whenShouldItHappen: WhenShouldHappen.BEGINNING,
}
export const ViewCategoryData: FC<ViewCategoryDataProps> = () => (
  <div className='modal__body'>
    <Section title={SECTION_TITLE.CATEGORY_ATTRIBUTES}>
      <Label label={INPUT_LABEL.CATEGORY_NAME_VIEW} />
      <div className='view-category__info'>{category.categoryName}</div>
      <Label label={INPUT_LABEL.CATEGORY_LANGUAGE_VIEW} />
      <div className='view-category__info'>{category.indicatedLanguage}</div>
      <Label label={INPUT_LABEL.CATEGORY_DESCRIPTION_VIEW} />
      <div className='view-category__info'>{category.description}</div>
    </Section>

    <Section title={SECTION_TITLE.CATEGORY_WORDS_PHRASES}>
      <Label label={INPUT_LABEL.WORDS_OR_PHRASES_VIEW} />
      <div className='view-category__info'>
        <Highlighter
          highlightClassName='autosuggest__suggestion-match'
          searchWords={['AND', 'OR']}
          caseSensitive
          textToHighlight={category.wardsAndPhrases}
        />
      </div>
      <Label label={INPUT_LABEL.WHO_APPLY_TO} />
      <div className='view-category__info'>{category.whoNeedsToSayOrNotSay}</div>
      <Label label={INPUT_LABEL.WHERE_TO_HAPPEN} />
      <div className='view-category__info'>{category.saidOrNotSaid}</div>
      <Label label={INPUT_LABEL.WHEN_SHOULD_HAPPEN} />
      <div className='view-category__info'>{category.whenShouldItHappen}</div>
      <Label label={INPUT_LABEL.HOW_LONG_INTO} />
      <div className='view-category__info'>10:00</div>
    </Section>
    {/*do not remove*/}
    {/*<Section title='Who does this Category Apply to? '>*/}
    {/*  <UsersTable isViewMode />*/}
    {/*  <GroupsTable isViewMode />*/}
    {/*</Section>*/}
  </div>
)
