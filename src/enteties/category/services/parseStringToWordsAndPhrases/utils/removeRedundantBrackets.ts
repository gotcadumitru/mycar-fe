import { generateDataForRedundantBrackets } from './generateDataForRedundantBrackets'
import { parseDataToNestedArray } from './parseDataToNestedArray'

/**
 * Removes redundant brackets from a logical expression string.
 *
 * @param {string} data - The logical expression to process.
 * @returns {string} The logical expression with redundant brackets removed.
 */
export const removeRedundantBrackets = (data: string) => {
  // Parse the input string into a nested array.
  const parsedData = parseDataToNestedArray([...data])
  // Process the nested array to remove redundant brackets
  return generateDataForRedundantBrackets(parsedData)
}
