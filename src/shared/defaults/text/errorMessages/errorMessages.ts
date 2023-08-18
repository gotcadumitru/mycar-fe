export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'This field is required',
  INVALID_PROXIMITY_VALUE:
    'The proximity value provided is invalid. Proximity values should be between 0 and 10, inclusive. Please update the proximity value in your query and try again',
  INVALID_PROXIMITY_PLACE:
    'The proximity operator is not placed correctly. Please make sure that the / operator is placed between words/phrases (which are in quotes) and a number',
  NOT_OPERATOR_PLACE:
    'NOT operator not placed correctly. Please make sure that the NOT operator is placed at the beginning of the input data, and try again',
  INVALID_PARENTHESES_PLACE:
    'The parentheses are not in the correct position. Please check that all parentheses are properly matched and try again',
  INVALID_OPERATOR_PLACE:
    'Operators not placed correctly. Please make sure that all operators are placed correctly, and try again',
  INVALID_AND_NOT_OPERATOR:
    'Multiple AND NOT operators have been detected at the same level, instead use: ...AND NOT ("Y" OR "Z"... )',
  EMPTY_TERMS:
    'Empty terms are not allowed. Please ensure that operators and commas (if present) are correctly placed',
}
