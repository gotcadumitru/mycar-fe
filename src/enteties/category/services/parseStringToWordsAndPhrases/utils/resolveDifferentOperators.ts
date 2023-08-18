/* eslint-disable import/no-cycle */
import { OpSimplified } from '../consts/contants'
import type { NestedArray } from '../types/parseStringToWordsAndPhrases.types'
import { checkIfOperatorsAreLocatedCorrectly } from './checkIfOperatorsAreLocatedCorrectly'
import { generateDataForRedundantBrackets } from './generateDataForRedundantBrackets'
import { getOperatorsInfo } from './getOperatorsInfo'

/**
 * Takes an array of strings or nested arrays as input and returns a new array after resolving different types of operators.
 * It calls the checkIfOperatorsAreLocatedCorrectly function to verify that the operators are located correctly,
 * then uses getOperatorsInfo to determine the most important operator in the array,
 * and recursively replaces the elements containing the most important operator with
 * a new nested array with redundant brackets removed.
 *
 * @param {Array} el - The array of strings or nested arrays to be processed.
 * @returns {Array} - The new array after resolving different types of operators.
 * @throws {Error} - If the operators are not located correctly.
 */
export const resolveDifferentOperators = (
  el: (string | NestedArray)[],
): (string | NestedArray)[] => {
  checkIfOperatorsAreLocatedCorrectly(el)

  // Get information about the most important operator and its location in the array
  const { isDifferentOperators, mostImportantOperatorIndex, mostImportantOperator } =
    getOperatorsInfo(el)

  // If all operators are the same, then we don't have to make extra changes
  if (!isDifferentOperators) return el

  // Find the range of elements that need to be changed based on the most important operator
  let indexStart = mostImportantOperatorIndex - 1
  let indexEnd = mostImportantOperatorIndex + 2
  if (mostImportantOperator === OpSimplified.NOT) {
    indexStart = 0
    indexEnd = 2
  }

  // Get the elements from the range that need to be changed
  const elementsFromAndOperator = el.slice(indexStart, indexEnd)

  // Generate a string representation of the elements from the range that need to be changed,
  // adding redundant brackets to ensure correct order of operations
  const elementsFormed = `(${elementsFromAndOperator
    .map(generateDataForRedundantBrackets)
    .join('')})`

  // Create a new array with the changed elements
  const elementsChanged = [...el.slice(0, indexStart), elementsFormed, ...el.slice(indexEnd)]

  // Recursively resolve any remaining different operators in the array
  return resolveDifferentOperators(elementsChanged)
}
