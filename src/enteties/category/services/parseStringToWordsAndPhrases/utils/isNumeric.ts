/**
 * Checks if a given string is numeric, meaning it only contains digits (0-9).
 * @param value - The string value to be checked.
 * @returns A boolean indicating if the value is numeric or not.
 */
export const isNumeric = (value: string) => /^-?\d+$/.test(value)
