/* eslint-disable no-param-reassign,import/no-cycle */
import type { NestedArray, NestedArrayElement } from '../types/parseStringToWordsAndPhrases.types'
import { resolveDifferentOperators } from './resolveDifferentOperators'

/**
 * This function generates a string representation of a nested array,
 * which may or may not have redundant brackets.
 *
 * @param {NestedArrayElement} el - the element that is to be processed
 * @returns {string} a string representation of the processed element
 */
export const generateDataForRedundantBrackets = (el: NestedArrayElement): string => {
  if (!Array.isArray(el)) return el

  while (el.length === 1 && Array.isArray(el[0])) [el] = el
  const resolvedArray = resolveDifferentOperators(el as (string | NestedArray)[])

  return `(${resolvedArray.map(generateDataForRedundantBrackets).join('')})`
}
