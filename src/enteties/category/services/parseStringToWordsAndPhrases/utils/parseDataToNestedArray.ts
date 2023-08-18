import type { NestedArray, NestedArrayElement } from '../types/parseStringToWordsAndPhrases.types'

/**
 * Parses an array of string tokens into a nested array structure.
 * @param toks An array of string tokens representing the input data.
 * @param depth The current depth of the nested array structure.
 * @throws Error If there is a mismatched parenthesis or a premature end of string.
 * @returns The nested array structure representing the input data.
 */
export const parseDataToNestedArray = (toks: string[], depth = 0) => {
  // Initialize an empty nested array to store the parsed data.
  const ast: NestedArray = []

  // Loop through all tokens in the input array.
  while (toks.length) {
    // Remove the first token from the input array and store it in a variable.
    const t = toks.shift()

    // Depending on the value of the token, perform a different action.
    switch (t) {
      // If the token is an opening parenthesis, recursively parse the data inside it.
      case '(':
        ast.push(parseDataToNestedArray(toks, depth + 1) as NestedArrayElement)
        break
      // If the token is a closing parenthesis, return the nested array.
      case ')':
        return ast
      // If the token is anything else (i.e., not a parenthesis), add it to the nested array.
      default:
        if (t) ast.push(t)
    }
  }

  return ast
}
