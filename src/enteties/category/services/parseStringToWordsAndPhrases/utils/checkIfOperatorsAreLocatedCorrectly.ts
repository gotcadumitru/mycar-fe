/* eslint-disable no-continue */
import { ERROR_MESSAGES } from 'shared/defaults/text'
import { OpSimplified, OpSimplifiedToText } from '../consts/contants'
import type { NestedArray } from '../types/parseStringToWordsAndPhrases.types'
import { checkIsOperator } from './checkIsOperator'
import { isNumeric } from './isNumeric'
import { isStringsArray } from './isStringsArray'

/**
 * Check if the operators are located correctly in the data array
 *
 * @param {Array} data - the array to be checked
 * @throws {Error} if operators are not located correctly
 */
export const checkIfOperatorsAreLocatedCorrectly = (data: (string | NestedArray)[]) => {
  if (isStringsArray(data)) return

  const OperatorsCount = {
    [OpSimplified.AND_NOT]: 0,
  }

  for (let i = 0; i < data.length; i += 1) {
    const character = data[i]
    const isOperator = checkIsOperator(character)

    if (isOperator) {
      if (character === OpSimplified.AND_NOT) {
        OperatorsCount[character] += 1
      }

      if (character === OpSimplified.NOT) {
        if (i !== 0) throw new Error(ERROR_MESSAGES.NOT_OPERATOR_PLACE)
        break
      }
      if (!(i % 2))
        throw new Error(
          `Operator ${
            OpSimplifiedToText[character as OpSimplified]
          } not placed correctly.  Please make sure that all operators are placed correctly, and try again.`,
        )
      if (character === OpSimplified.EXTRA_WORDS) {
        if (
          !isStringsArray(data[i - 1]) ||
          !isStringsArray(data[i + 1]) ||
          !isNumeric((data[i + 1] as NestedArray).join(''))
        )
          throw new Error(ERROR_MESSAGES.INVALID_PROXIMITY_PLACE)
        break
      }
      continue
    }
    if (i % 2) throw new Error(ERROR_MESSAGES.INVALID_OPERATOR_PLACE)
  }
  if (OperatorsCount[OpSimplified.AND_NOT] > 1)
    throw new Error(ERROR_MESSAGES.INVALID_AND_NOT_OPERATOR)
}
