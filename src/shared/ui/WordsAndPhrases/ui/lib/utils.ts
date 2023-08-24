/* eslint-disable @typescript-eslint/ban-ts-comment */
import { v4 as uuidV4 } from 'uuid'
import { StarPosition, WordsAndPhrasesItemType, WordsAndPhrasesTypes } from '../../types/types' //

export const findNodeById = (
  item: WordsAndPhrasesItemType,
  id: string,
): WordsAndPhrasesItemType | null => {
  if (item.value === id) return item
  if (
    item.type === WordsAndPhrasesTypes.AND ||
    item.type === WordsAndPhrasesTypes.OR ||
    item.type === WordsAndPhrasesTypes.AND_NOT
  ) {
    const leftItem = findNodeById(item.ElementLeft, id)
    if (leftItem) return leftItem

    const rightItem = findNodeById(item.ElementRight, id)
    if (rightItem) return rightItem
  }
  if (
    item.type === WordsAndPhrasesTypes.EXTRA_WORDS ||
    item.type === WordsAndPhrasesTypes.EXTRA_LETTERS
  ) {
    const element = findNodeById(item.Element, id)
    if (element) return element
  }
  return null
}

export const replaceNode = (
  originalNode: WordsAndPhrasesItemType | null,
  newNode: WordsAndPhrasesItemType,
) => {
  if (!originalNode || originalNode.type !== WordsAndPhrasesTypes.VALUE) return
  // Please ignore these @ts-ignore, this is not the final version
  // @ts-ignore
  originalNode.value = newNode.value
  // @ts-ignore
  originalNode.type = newNode.type

  if (
    newNode.type === WordsAndPhrasesTypes.AND ||
    newNode.type === WordsAndPhrasesTypes.OR ||
    newNode.type === WordsAndPhrasesTypes.AND_NOT
  ) {
    // @ts-ignore
    delete originalNode.value
    // @ts-ignore
    originalNode.ElementRight = newNode.ElementRight
    // @ts-ignore
    originalNode.ElementLeft = newNode.ElementLeft
  }

  if (newNode.type === WordsAndPhrasesTypes.EXTRA_LETTERS) {
    // @ts-ignore
    delete originalNode.value
    // @ts-ignore
    originalNode.Element = newNode.Element
    // @ts-ignore
    originalNode.starPosition = newNode.starPosition
  }
  if (newNode.type === WordsAndPhrasesTypes.EXTRA_WORDS) {
    // @ts-ignore
    delete originalNode.value
    // @ts-ignore
    originalNode.Element = newNode.Element
    // @ts-ignore
    originalNode.starPosition = newNode.starPosition
  }
}

export const getNewAndOrAndNotBlock = (
  type: WordsAndPhrasesTypes.AND | WordsAndPhrasesTypes.AND_NOT | WordsAndPhrasesTypes.OR,
  value: string,
): WordsAndPhrasesItemType => {
  const idLeft = uuidV4()
  const idRight = uuidV4()
  const idContainer = uuidV4()

  return {
    type,
    value: idContainer,
    ElementLeft: {
      value: idRight,
      type: WordsAndPhrasesTypes.VALUE,
      value,
    },
    ElementRight: {
      value: '',
      value: idLeft,
      type: WordsAndPhrasesTypes.VALUE,
    },
  }
}

export const getNewExtraLettersBlock = (
  starPosition: StarPosition,
  value: string,
): WordsAndPhrasesItemType => {
  const idElement = uuidV4()
  const idContainer = uuidV4()

  return {
    type: WordsAndPhrasesTypes.EXTRA_LETTERS,
    value: idContainer,
    Element: {
      value: idElement,
      type: WordsAndPhrasesTypes.VALUE,
      value,
    },
    starPosition,
  }
}
