import { OpFromText, SPEECH_MARKS } from '../consts/contants'

/**
 * Adds quotation marks around words or phrases separated by a comma
 * @param {string} string - The string to add quotes to
 * @returns {string} The new string with quotes around the words or phrases
 */
export const addSpeechMarks = (string: string) => {
  // split the string into words using comma as the separator
  const wordsOrPhrases = string.split(OpFromText.OR_DOT)
  // empty array to store words with quotes
  const quotedWordsOrPhrases = []

  for (let i = 0; i < wordsOrPhrases.length; i += 1) {
    // remove leading and trailing whitespace from the word
    const WordOrPhrase = wordsOrPhrases[i].trim()
    // add the necessary quotes around the word
    quotedWordsOrPhrases.push(SPEECH_MARKS + WordOrPhrase + SPEECH_MARKS)
  }
  // return the concatenated words as a string with commas between them
  return quotedWordsOrPhrases.join(`${OpFromText.OR_DOT} `)
}
