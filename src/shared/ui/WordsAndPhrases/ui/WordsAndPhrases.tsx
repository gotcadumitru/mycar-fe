/* eslint-disable @typescript-eslint/ban-ts-comment */
import classNames from 'classnames'
import { FC, useState } from 'react'
import Button, { ButtonSize } from 'shared/ui/Button'
import Label, { LabelProps } from 'shared/ui/Label'
import Popup from 'shared/ui/Popup'
import '../styles/words-and-phrases.scss'
import { StarPosition, WordsAndPhrasesItemType, WordsAndPhrasesTypes } from '../types/types'
import { And } from './conditions/And'
import { AndNot } from './conditions/AndNot'
import { ExtraLetters } from './conditions/ExtraLetters'
import { ExtraWords } from './conditions/ExtraWords'
import { Or } from './conditions/Or'
import {
  findNodeById,
  getNewAndOrAndNotBlock,
  getNewExtraLettersBlock,
  replaceNode,
} from './lib/utils'

interface WordsAndPhrasesProps {
  className?: string
  items: WordsAndPhrasesItemType | null
  setItems: (value: WordsAndPhrasesItemType | null) => void
}

type WordsAndPhrasesWithLabelProps = WordsAndPhrasesProps & LabelProps
export const WordsAndPhrases: FC<WordsAndPhrasesWithLabelProps> = ({
  className,
  items,
  label,
  infoText,
  setItems,
}) => {
  const [lastFocusedInputId, setLastFocusedInputId] = useState<string | null>(null)

  const onInputChange = (id: string, value: string) => {
    if (items) {
      const itemsDeepCopy = structuredClone(items)
      const node = findNodeById(itemsDeepCopy, id)
      // Please ignore these @ts-ignore, this is not the final version
      // @ts-ignore
      node.value = value
      setItems(itemsDeepCopy)
    }
  }

  const onClickAndOrAndNot = (
    inputId: string | null,
    type: WordsAndPhrasesTypes.AND | WordsAndPhrasesTypes.OR | WordsAndPhrasesTypes.AND_NOT,
  ) => {
    if (inputId && items) {
      const itemsDeepCopy = structuredClone(items)
      const node = findNodeById(itemsDeepCopy, inputId)
      if (node?.type === WordsAndPhrasesTypes.VALUE) {
        replaceNode(node, getNewAndOrAndNotBlock(type, node.value))
        setItems(itemsDeepCopy)
      }
    } else {
      setItems(getNewAndOrAndNotBlock(type, ''))
    }
  }

  const onClickExtraLetters = (inputId: string | null) => {
    if (inputId && items) {
      const itemsDeepCopy = structuredClone(items)
      const node = findNodeById(itemsDeepCopy, inputId)
      if (node?.type === WordsAndPhrasesTypes.VALUE) {
        replaceNode(node, getNewExtraLettersBlock(StarPosition.BOTH, node.value))
        setItems(itemsDeepCopy)
      }
    } else {
      setItems(getNewExtraLettersBlock(StarPosition.BOTH, ''))
    }
  }

  const getElement = (item: WordsAndPhrasesItemType) => {
    switch (item.type) {
      case WordsAndPhrasesTypes.AND: {
        return (
          <And
            childrenLeft={getElement(item.ElementLeft)}
            childrenRight={getElement(item.ElementRight)}
          />
        )
      }
      case WordsAndPhrasesTypes.OR: {
        return (
          <Or
            childrenLeft={getElement(item.ElementLeft)}
            childrenRight={getElement(item.ElementRight)}
          />
        )
      }
      case WordsAndPhrasesTypes.AND_NOT: {
        return (
          <AndNot
            childrenLeft={getElement(item.ElementLeft)}
            childrenRight={getElement(item.ElementRight)}
          />
        )
      }

      case WordsAndPhrasesTypes.EXTRA_LETTERS: {
        return (
          <ExtraLetters starPosition={item.starPosition}>{getElement(item.Element)}</ExtraLetters>
        )
      }
      case WordsAndPhrasesTypes.EXTRA_WORDS: {
        return <ExtraWords noOfWords={item.noOfWords}>{getElement(item.Element)}</ExtraWords>
      }
      case WordsAndPhrasesTypes.VALUE: {
        return (
          <input
            value={item.value}
            onFocus={() => setLastFocusedInputId(item.value)}
            onChange={(e) => onInputChange(item.value, e.target.value)}
          />
        )
      }
      default:
        return null
    }
  }

  return (
    <div className={classNames('words-and-phrases', className)}>
      {label && <Label label={label} infoText={infoText} />}
      <div className='words-and-phrases__rules'>
        {items ? (
          getElement(items)
        ) : (
          <div className='empty-message'>Select one of the operators below to start</div>
        )}
      </div>
      <div className='words-and-phrases__options'>
        <Popup
          placement='bottom'
          referenceElement={
            <Button
              type='button'
              onClick={() => onClickAndOrAndNot(lastFocusedInputId, WordsAndPhrasesTypes.AND)}
              size={ButtonSize.INPUT_SIZE}
            >
              AND
            </Button>
          }
          popupElement='AND Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem magnam molestiae reprehenderit vitae.
  Earum id illo inventore, non quod ratione sunt temporibus! At consectetur earum iste mollitia pariatur quae
  sapiente.'
        />
        <Popup
          placement='bottom'
          referenceElement={
            <Button
              type='button'
              onClick={() => onClickAndOrAndNot(lastFocusedInputId, WordsAndPhrasesTypes.OR)}
              size={ButtonSize.INPUT_SIZE}
            >
              OR
            </Button>
          }
          popupElement='OR Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem magnam molestiae reprehenderit vitae.
  Earum id illo inventore, non quod ratione sunt temporibus! At consectetur earum iste mollitia pariatur quae
  sapiente.'
        />
        <Popup
          placement='bottom'
          referenceElement={
            <Button
              type='button'
              onClick={() => onClickAndOrAndNot(lastFocusedInputId, WordsAndPhrasesTypes.AND_NOT)}
              size={ButtonSize.INPUT_SIZE}
            >
              AND NOT
            </Button>
          }
          popupElement='AND NOT Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem magnam molestiae reprehenderit vitae.
  Earum id illo inventore, non quod ratione sunt temporibus! At consectetur earum iste mollitia pariatur quae
  sapiente.'
        />
        <Popup
          placement='bottom'
          referenceElement={
            <Button
              type='button'
              onClick={() => onClickExtraLetters(lastFocusedInputId)}
              size={ButtonSize.INPUT_SIZE}
            >
              EXTRA LETTERS
            </Button>
          }
          popupElement='EXTRA LETTERS Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem magnam molestiae reprehenderit vitae.
  Earum id illo inventore, non quod ratione sunt temporibus! At consectetur earum iste mollitia pariatur quae
  sapiente.'
        />
        <Popup
          placement='bottom'
          referenceElement={<Button size={ButtonSize.INPUT_SIZE}>EXTRA WORDS</Button>}
          popupElement='EXTRA WORDS Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem magnam molestiae reprehenderit vitae.
  Earum id illo inventore, non quod ratione sunt temporibus! At consectetur earum iste mollitia pariatur quae
  sapiente.'
        />
      </div>
    </div>
  )
}
