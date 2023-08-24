export enum StarPosition {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  BOTH = 'BOTH',
}

export enum WordsAndPhrasesTypes {
  AND = 'AND',
  OR = 'OR',
  AND_NOT = 'AND_NOT',
  EXTRA_LETTERS = 'EXTRA_LETTERS',
  EXTRA_WORDS = 'EXTRA_WORDS',
  VALUE = 'VALUE',
}

export type WordAndPhrasesValueType = {
  value: string
  type: WordsAndPhrasesTypes.VALUE
}

export type WordAndPhrasesExtraWordsType = {
  Element: WordsAndPhrasesItemType
  noOfWords: number
  type: WordsAndPhrasesTypes.EXTRA_WORDS
}
export type WordAndPhrasesExtraLettersType = {
  Element: WordsAndPhrasesItemType
  starPosition: StarPosition
  type: WordsAndPhrasesTypes.EXTRA_LETTERS
}

export type WordAndPhrasesAndOrAndNotType = {
  ElementLeft: WordsAndPhrasesItemType
  ElementRight: WordsAndPhrasesItemType
  type: WordsAndPhrasesTypes.AND | WordsAndPhrasesTypes.OR | WordsAndPhrasesTypes.AND_NOT
}

export type WordsAndPhrasesItemType = {
  value: string
} & (
  | WordAndPhrasesValueType
  | WordAndPhrasesExtraWordsType
  | WordAndPhrasesExtraLettersType
  | WordAndPhrasesAndOrAndNotType
)
