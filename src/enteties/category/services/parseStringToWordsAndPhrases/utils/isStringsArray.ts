import type { NestedArray } from '../types/parseStringToWordsAndPhrases.types'

/**
 * isStringsArray function checks if the input argument is an array of strings or not.
 * If the input argument is a string, it returns false.
 * If the input argument is not an array, it returns false.
 * It returns true if all the elements in the array are of string type.
 **/
export const isStringsArray = (arr: string | NestedArray) => {
  if (typeof arr === 'string') return false
  if (!Array.isArray(arr)) return false

  return arr.every((i) => typeof i === 'string')
}
