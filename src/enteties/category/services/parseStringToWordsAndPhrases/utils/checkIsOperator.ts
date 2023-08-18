import type { NestedArray } from 'enteties/category/services/parseStringToWordsAndPhrases/types/parseStringToWordsAndPhrases.types'
import { OpSimplified } from '../consts/contants'

/**
 * Check if given value is an operator from the simplified list
 * @param data - The data to be checked, can be a string or an array
 * @returns A boolean indicating whether the data is an operator or not
 */
export const checkIsOperator = (data: string | NestedArray) =>
  !Array.isArray(data) && Object.values(OpSimplified).includes(data as OpSimplified)
