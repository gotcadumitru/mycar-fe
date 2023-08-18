/* eslint-disable quotes */
import { parseStringToWordsAndPhrases } from 'enteties/category'
import {
  queriesForTesting,
  queriesWithErrorsForTesting,
} from 'shared/defaults/tests/queriesForTesting'

describe('Test converter', () => {
  describe('it must convert without any error', () => {
    queriesForTesting.forEach(({ queryToTest, expectedResponse }) => {
      test(`(${queryToTest.query}), ${queryToTest.channel}, ${queryToTest.scope}`, () => {
        const convertedString = parseStringToWordsAndPhrases(queryToTest)
        expect(convertedString).toStrictEqual(expectedResponse)
      })
    })
  })

  describe('must convert with errors', () => {
    queriesWithErrorsForTesting.forEach(({ queryToTest, errorMessage }) => {
      test(`(${queryToTest.query}), ${queryToTest.channel}, ${queryToTest.scope}`, () => {
        // expect(() => parseStringToWordsAndPhrases(queryToTest)).not.toThrow()
        expect(() => parseStringToWordsAndPhrases(queryToTest)).toThrow(errorMessage)
      })
    })
  })
})
