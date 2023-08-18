import { OpSimplified } from '../consts/contants'
import type { NestedArray } from '../types/parseStringToWordsAndPhrases.types'

/**
 * Returns information about the most important operator in a nested array of strings
 * and if we have different operators in the same level
 * @param el - A nested array of strings to evaluate
 * @returns An object containing information about the most important operator in the array
 */
export const getOperatorsInfo = (el: (string | NestedArray)[]) => {
  const extraWordsOperatorIndex = el.indexOf(OpSimplified.EXTRA_WORDS)
  const andNotOperatorIndex = el.indexOf(OpSimplified.AND_NOT)
  const andOperatorIndex = el.indexOf(OpSimplified.AND)
  const orOperatorIndex = el.indexOf(OpSimplified.OR)
  const notOperatorIndex = el.indexOf(OpSimplified.NOT)
  const numberOfOperators = [
    notOperatorIndex,
    extraWordsOperatorIndex,
    andNotOperatorIndex,
    andOperatorIndex,
    orOperatorIndex,
  ].filter((operatorIndex) => operatorIndex !== -1).length

  const isDifferentOperators = numberOfOperators >= 2

  let mostImportantOperatorIndex = -1
  let mostImportantOperator: OpSimplified | null = null

  // Checks are in order of importance of operators
  if (extraWordsOperatorIndex !== -1) {
    mostImportantOperator = OpSimplified.EXTRA_WORDS
    mostImportantOperatorIndex = extraWordsOperatorIndex
  } else if (notOperatorIndex !== -1) {
    mostImportantOperator = OpSimplified.NOT
    mostImportantOperatorIndex = notOperatorIndex
  } else if (andNotOperatorIndex !== -1) {
    mostImportantOperator = OpSimplified.AND_NOT
    mostImportantOperatorIndex = andNotOperatorIndex
  } else if (andOperatorIndex !== -1) {
    mostImportantOperator = OpSimplified.AND
    mostImportantOperatorIndex = andOperatorIndex
  } else if (orOperatorIndex !== -1) {
    mostImportantOperator = OpSimplified.OR
    mostImportantOperatorIndex = orOperatorIndex
  }
  return { isDifferentOperators, mostImportantOperatorIndex, mostImportantOperator }
}
