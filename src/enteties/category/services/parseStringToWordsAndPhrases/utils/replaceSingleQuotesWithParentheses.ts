/* eslint-disable no-param-reassign */
import { SPEECH_MARKS } from '../consts/contants'
import replaceCharacter from './replaceCharacter'

/**
 * Replaces single quotes with parentheses, alternating between opening and closing parentheses
 * each time a single quote is encountered.
 *
 * @param data - The string to replace single quotes with parentheses in
 * @returns The modified string with single quotes replaced with parentheses
 */
export const replaceSingleQuotesWithParentheses = (data: string) => {
  let isOpen = false // tracks whether we're inside a pair of speech marks or not
  for (let i = 0; i < data.length; i += 1) {
    if (data[i] === SPEECH_MARKS) {
      // if we encounter a speech mark...
      if (isOpen) {
        // ...and we're currently inside a pair of speech marks, replace with closing parenthesis
        data = replaceCharacter(data, i, ')')
      } else {
        // ...otherwise, replace with opening parenthesis
        data = replaceCharacter(data, i, '(')
      }
      // toggle isOpen to reflect whether we're currently inside a pair of speech marks or not
      isOpen = !isOpen
    }
  }

  // return the modified string with single quotes replaced with parentheses
  return data
}
