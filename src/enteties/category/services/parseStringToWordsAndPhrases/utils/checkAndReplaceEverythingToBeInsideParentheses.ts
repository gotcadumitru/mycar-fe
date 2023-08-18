import { ERROR_MESSAGES } from 'shared/defaults/text'

/**
 * This function checks if the input string contains balanced parentheses or not. If it does not contain balanced parentheses,
 * it throws an error. If it contains balanced parentheses and the string is not already enclosed in parentheses, it returns a new string
 * that encloses the input string inside parentheses. If it contains balanced parentheses and the string is already enclosed in parentheses,
 * it returns the input string.
 *
 * @param data - The input string to be checked and/or enclosed in parentheses
 * @returns A new string that encloses the input string inside parentheses (if it wasn't already enclosed) or the original input string (if it was already enclosed)
 * @throws An error if the input string does not contain balanced parentheses or contains unbalanced quotation marks
 */
export const checkAndReplaceEverythingToBeInsideParentheses = (data: string) => {
  // Initialize an empty stack to keep track of parentheses
  const parenthesesStack: string[] = []
  // Initialize a variable to keep track of whether the stack was empty at any point during the loop
  let wasStackEmpty = false

  // Iterate through each character in the input string
  for (let i = 0; i < data.length; i += 1) {
    // If the current character is an opening parenthesis, push it onto the stack
    if (data[i] === '(') {
      parenthesesStack.push(data[i])
    }
    // If the current character is a closing parenthesis, check if the top of the stack is a matching opening parenthesis
    if (data[i] === ')') {
      if (parenthesesStack.at(-1) !== '(') {
        // If the top of the stack is not a matching opening parenthesis, throw an error
        throw new Error(ERROR_MESSAGES.INVALID_PARENTHESES_PLACE)
      } else {
        // If the top of the stack is a matching opening parenthesis, pop it from the stack
        parenthesesStack.pop()

        // If the stack is now empty, and we haven't reached the end of the input string yet, set the `wasStackEmpty` flag to true
        if (parenthesesStack.length === 0 && i < data.length - 1) wasStackEmpty = true
      }
    }
  }

  // If the stack is not empty after the loop, throw an error
  if (parenthesesStack.length)
    throw new Error(
      'The parentheses or quotation marks are not closed properly. Please check that all parentheses and quotation marks are properly closed and try again.',
    )

  // If the stack was empty at some point during the loop, return a new string that encloses the input string inside parentheses
  if (wasStackEmpty) return `(${data})`

  return data
}
