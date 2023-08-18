/* eslint-disable @typescript-eslint/no-use-before-define,no-param-reassign,no-continue */
import { ERROR_MESSAGES } from 'shared/defaults/text'
import type {
  CategoryQueryLogic,
  CategoryQueryOperator,
  CategoryQueryTerm,
  WordsAndPhrasesConvertOptionsType,
  WordsAndPhrasesPeriodOptions,
} from '../../model/types/category.types'
import {
  OpFromText,
  OpSimplified,
  OpSimplifiedToText,
  PROXIMITY,
  SPEECH_MARKS,
} from './consts/contants'
import type { NestedArray } from './types/parseStringToWordsAndPhrases.types'
import { addSpeechMarks } from './utils/addSpeechMarks'
import { checkAndReplaceEverythingToBeInsideParentheses } from './utils/checkAndReplaceEverythingToBeInsideParentheses'
import { isStringsArray } from './utils/isStringsArray'
import { parseDataToNestedArray } from './utils/parseDataToNestedArray'
import { putAllNumbersInsideSpeechMarks } from './utils/putAllNumbersInsideSpeechMarks'
import { removeRedundantBrackets } from './utils/removeRedundantBrackets'
import { replaceOperators } from './utils/replaceOperators'
import { replaceSingleQuotesWithParentheses } from './utils/replaceSingleQuotesWithParentheses'

const parseStringArray = (element: NestedArray, Negate: boolean) => {
  const isStringArray = isStringsArray(element) && Array.isArray(element)
  if (!isStringArray) return []
  const Term = element.join('')
  return [{ Term, Negate, Proximity: 0 }]
}

const parseExtraWords = (element: NestedArray, Negate: boolean) => {
  if (element[1] !== OpFromText.EXTRA_WORDS) return []

  const Proximity = Number((element[2] as string[]).join(''))
  if (Proximity > PROXIMITY.MAX || Proximity < PROXIMITY.MIN)
    throw new Error(ERROR_MESSAGES.INVALID_PROXIMITY_VALUE)
  return [
    {
      Term: (element[0] as string[]).join(''),
      Negate,
      Proximity: Number((element[2] as string[]).join('')),
    },
  ]
}

const parseNotTerms = (element: NestedArray) => {
  const isStringArray = isStringsArray(element[1]) && Array.isArray(element)
  if (element[0] !== OpSimplified.NOT) return []
  if (!isStringArray) {
    if (element[1][1] === OpFromText.EXTRA_WORDS) {
      return parseExtraWords(element[1] as NestedArray, true)
    }
    return []
  }
  const Term = (element[1] as NestedArray).join('')
  return [{ Term, Negate: true, Proximity: 0 }]
}

const parseAnyClauseExceptNot = (
  element: NestedArray,
  Negate: boolean,
  periodOptions: WordsAndPhrasesPeriodOptions,
) => {
  const isArrayOfArrays = Array.isArray(element) && !isStringsArray(element)
  if (
    !isArrayOfArrays ||
    element[0] === OpSimplified.NOT ||
    element[1] === OpSimplified.EXTRA_WORDS
  ) {
    return []
  }
  const parsedChildren = parseNestedArray(element, periodOptions) as CategoryQueryLogic
  return [
    {
      ...parsedChildren,
      Negate,
      ...periodOptions,
    },
  ]
}

const parseNotClause = (element: NestedArray, periodOptions: WordsAndPhrasesPeriodOptions) => {
  if (
    !(element[0] === OpSimplified.NOT) ||
    isStringsArray(element[1]) ||
    element[1][1] === OpFromText.EXTRA_WORDS
  ) {
    return []
  }
  const parsedChildren = parseNestedArray(
    element[1] as NestedArray,
    periodOptions,
  ) as CategoryQueryLogic

  return [
    {
      ...parsedChildren,
      Negate: true,
      ...periodOptions,
    },
  ]
}

const parseNestedArray = (
  nestedArray: NestedArray,
  periodOptions: WordsAndPhrasesPeriodOptions,
) => {
  while (nestedArray.length === 1 && Array.isArray(nestedArray[0])) [nestedArray] = nestedArray

  let Operator = OpSimplifiedToText[nestedArray[1] as keyof typeof OpSimplifiedToText]
  if (nestedArray[0] === OpSimplified.NOT) {
    Operator = OpFromText.NOT
    if (nestedArray.length !== 2) throw new Error(ERROR_MESSAGES.NOT_OPERATOR_PLACE)
  }
  const Terms: CategoryQueryTerm[] = []
  const Clause: CategoryQueryLogic[] = []
  const isOrOperator = Operator === OpFromText.OR
  const isAndOperator = Operator === OpFromText.AND
  const isAndNotOperator = Operator === OpFromText.AND_NOT
  const isExtraWordsOperator = Operator === OpFromText.EXTRA_WORDS
  const isNotOperator = Operator === OpFromText.NOT

  if (isExtraWordsOperator) {
    Terms.push(...parseExtraWords(nestedArray, false))
    Operator = OpFromText.OR
  } else if (isStringsArray(nestedArray)) {
    Operator = OpFromText.OR
    Terms.push(...parseStringArray(nestedArray, false))
  } else {
    for (let i = 0; i < nestedArray.length; i += 1) {
      const element = nestedArray[i] as NestedArray
      const isLastElementFromArray = i === nestedArray.length - 1
      if (isOrOperator || isAndOperator || isAndNotOperator || isNotOperator) {
        if ((i % 2 && !isNotOperator) || (isNotOperator && !i)) continue

        const Negate = (isAndNotOperator || isNotOperator) && isLastElementFromArray
        Terms.push(...parseStringArray(element, Negate))
        Terms.push(...parseExtraWords(element, Negate))
        Terms.push(...parseNotTerms(element))
        Clause.push(...parseAnyClauseExceptNot(element, Negate, periodOptions))
        Clause.push(...parseNotClause(element, periodOptions))
      }
    }
  }
  if (Operator === OpFromText.AND_NOT) Operator = OpFromText.AND
  if (Operator === OpFromText.NOT) {
    Operator = OpFromText.OR
  }

  const existEmptyTerm = Terms.some((term) => !term.Term)
  const trimmedTerms = Terms.map((term) => ({
    ...term,
    Term: term.Term.replace(/\s+/g, ' ').trim(), // remove extra white spaces
  }))
  if (existEmptyTerm) throw new Error(ERROR_MESSAGES.EMPTY_TERMS)

  return {
    Operator: Operator as CategoryQueryOperator,
    Terms: trimmedTerms,
    Clause,
    ...periodOptions,
  }
}
const getParsedData = ({
  query,
  ...parseOptions
}: WordsAndPhrasesConvertOptionsType): CategoryQueryLogic => {
  const parsedDataToNestedArray = parseDataToNestedArray([...query])
  const parsedData = parseNestedArray(parsedDataToNestedArray, parseOptions.periodOptions)
  return {
    ...parsedData,
    Scope: parseOptions.scope,
    Channel: parseOptions.channel,
    ...parseOptions.periodOptions,
  }
}

export const parseStringToWordsAndPhrases = ({
  query,
  ...parseOptions
}: WordsAndPhrasesConvertOptionsType) => {
  if (!query) throw new Error(ERROR_MESSAGES.REQUIRED_FIELD)
  let queryParsed = query.replace(/(\r\n|\n|\r)/gm, '') // remove all line breaks

  queryParsed = putAllNumbersInsideSpeechMarks(queryParsed)

  if (!query.includes(SPEECH_MARKS)) {
    queryParsed = addSpeechMarks(queryParsed)
  }

  queryParsed = queryParsed.replace(/ (?=(?:[^"]*"[^"]*")*[^"]*$)/g, '') //  remove white space

  queryParsed = replaceOperators(queryParsed)
  queryParsed = replaceSingleQuotesWithParentheses(queryParsed)
  queryParsed = checkAndReplaceEverythingToBeInsideParentheses(queryParsed)
  queryParsed = removeRedundantBrackets(queryParsed)

  return getParsedData({ query: queryParsed, ...parseOptions })
}
