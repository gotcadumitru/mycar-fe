/**
 * Wraps all numbers in the input string with speech marks.
 *
 * @param data The string to modify.
 * @returns A modified string with all numbers wrapped in speech marks.
 */
export const putAllNumbersInsideSpeechMarks = (data: string): string =>
  // Replace all sequences of digits with the same sequence wrapped in speech marks
  data.replace(/(\d+)/g, '"$1"')
