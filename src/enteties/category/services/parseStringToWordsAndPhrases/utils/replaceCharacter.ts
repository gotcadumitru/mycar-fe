/**
 * Replaces a character at a given index in a string with a replacement string
 * @param string - The original string
 * @param index - The index of the character to replace
 * @param replacement - The replacement string
 * @returns The new string with the character replaced
 */
const replaceCharacter = (string: string, index: number, replacement: string) =>
  string.slice(0, index) + replacement + string.slice(index + replacement.length)
export default replaceCharacter
