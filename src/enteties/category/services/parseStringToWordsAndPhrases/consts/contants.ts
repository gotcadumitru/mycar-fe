// Constants for quotes and speech marks
export const SPEECH_MARKS = '"'

// Enum for the text representation of operators
export enum OpFromText {
  AND = 'AND',
  AND_NOT = 'ANDNOT',
  OR = 'OR',
  OR_DOT = ',',
  NOT = 'NOT',
  EXTRA_WORDS = '/',
}

// Enum for the simplified representation of operators
export enum OpSimplified {
  AND = '&',
  AND_NOT = '!',
  OR = '|',
  OR_DOT = '|',
  NOT = '~',
  EXTRA_WORDS = '/',
}

// A mapping of simplified operators to their text representation
export const OpSimplifiedToText = {
  [OpSimplified.AND]: OpFromText.AND,
  [OpSimplified.AND_NOT]: OpFromText.AND_NOT,
  [OpSimplified.OR]: OpFromText.OR,
  [OpSimplified.NOT]: OpFromText.NOT,
  [OpSimplified.EXTRA_WORDS]: OpFromText.EXTRA_WORDS,
}

export const PROXIMITY = {
  MIN: 0,
  MAX: 10,
}
