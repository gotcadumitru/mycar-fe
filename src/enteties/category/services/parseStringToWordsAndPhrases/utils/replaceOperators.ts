/* eslint-disable no-param-reassign */
import { OpFromText, OpSimplified, SPEECH_MARKS } from '../consts/contants'

/**
 * Replaces operators in a given string.
 * @param {string} data - The input string to replace operators.
 * @returns {string} - The resulting string after replacing the operators.
 */
export const replaceOperators = (data: string) => {
  Object.entries(OpFromText).forEach(([key, valueToReplace]) => {
    const opKey = key as keyof typeof OpSimplified
    const valueForReplacement = OpSimplified[opKey]
    if (opKey === 'NOT') {
      data = data
        .replaceAll(`${valueToReplace}${SPEECH_MARKS}`, `${valueForReplacement}${SPEECH_MARKS}`)
        .replaceAll(`${valueToReplace}(`, `${valueForReplacement}(`)
      return null
    }
    data = data
      .replaceAll(
        `${SPEECH_MARKS}${valueToReplace}${SPEECH_MARKS}`,
        `${SPEECH_MARKS}${valueForReplacement}${SPEECH_MARKS}`,
      )
      .replaceAll(`${SPEECH_MARKS}${valueToReplace}(`, `${SPEECH_MARKS}${valueForReplacement}(`)
      .replaceAll(`)${valueToReplace}${SPEECH_MARKS}`, `)${valueForReplacement}${SPEECH_MARKS}`)
      .replaceAll(`)${valueToReplace}(`, `)${valueForReplacement}(`)
    return null
  })

  return data
}
