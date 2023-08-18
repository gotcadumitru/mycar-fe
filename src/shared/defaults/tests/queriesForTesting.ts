/* eslint-disable quotes */
import {
  ToWhomDoesItApply,
  WhereToHappen,
  WordsAndPhrasesConvertOptionsType,
} from 'enteties/category'
import { CategoryQueryLogic } from 'enteties/category/model/types/category.types'
import { ERROR_MESSAGES } from 'shared/defaults/text'

export const queriesForTesting: {
  queryToTest: WordsAndPhrasesConvertOptionsType
  expectedResponse: CategoryQueryLogic
}[] = [
  {
    queryToTest: {
      query: `Dave`,
      channel: ToWhomDoesItApply.SPEAKER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    expectedResponse: {
      Operator: 'OR',
      Channel: ToWhomDoesItApply.SPEAKER,
      Scope: WhereToHappen.ALL,
      Clause: [],
      PeriodStart: 0,
      Terms: [
        {
          Term: 'Dave',
          Negate: false,
          Proximity: 0,
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `"Dave"`,
      channel: ToWhomDoesItApply.SPEAKER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    expectedResponse: {
      Operator: 'OR',
      Channel: ToWhomDoesItApply.SPEAKER,
      Scope: WhereToHappen.ALL,
      Clause: [],
      PeriodStart: 0,
      Terms: [
        {
          Term: 'Dave',
          Negate: false,
          Proximity: 0,
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `"Dave" AND "Doug"`,
      channel: ToWhomDoesItApply.SPEAKER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    expectedResponse: {
      Operator: 'AND',
      Channel: ToWhomDoesItApply.SPEAKER,
      Scope: WhereToHappen.ALL,
      Clause: [],
      PeriodStart: 0,
      Terms: [
        {
          Term: 'Dave',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'Doug',
          Negate: false,
          Proximity: 0,
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `"Dave" AND "Doug"`,
      channel: ToWhomDoesItApply.AGENT,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    expectedResponse: {
      Operator: 'AND',
      Channel: ToWhomDoesItApply.AGENT,
      Scope: WhereToHappen.ALL,
      Clause: [],
      PeriodStart: 0,
      Terms: [
        {
          Term: 'Dave',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'Doug',
          Negate: false,
          Proximity: 0,
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `"Dave" AND "Doug"`,
      channel: ToWhomDoesItApply.AGENT,
      scope: WhereToHappen.TURN,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    expectedResponse: {
      Operator: 'AND',
      Channel: ToWhomDoesItApply.AGENT,
      Scope: WhereToHappen.TURN,
      Clause: [],
      PeriodStart: 0,
      Terms: [
        {
          Term: 'Dave',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'Doug',
          Negate: false,
          Proximity: 0,
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `"Dave" AND ("Doug" OR "Harry")`,
      channel: ToWhomDoesItApply.CUSTOMER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    expectedResponse: {
      Operator: 'AND',
      Channel: ToWhomDoesItApply.CUSTOMER,
      Scope: WhereToHappen.ALL,
      PeriodStart: 0,
      Terms: [
        {
          Term: 'Dave',
          Negate: false,
          Proximity: 0,
        },
      ],
      Clause: [
        {
          Operator: 'OR',
          PeriodStart: 0,
          Clause: [],
          Negate: false,
          Terms: [
            {
              Term: 'Doug',
              Negate: false,
              Proximity: 0,
            },
            {
              Term: 'Harry',
              Negate: false,
              Proximity: 0,
            },
          ],
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `"Eminem" AND "John Wick" AND ("Beethoven" OR "Shazam")`,
      channel: ToWhomDoesItApply.CUSTOMER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    expectedResponse: {
      Operator: 'AND',
      Channel: ToWhomDoesItApply.CUSTOMER,
      Scope: WhereToHappen.ALL,
      PeriodStart: 0,
      Terms: [
        {
          Term: 'Eminem',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'John Wick',
          Negate: false,
          Proximity: 0,
        },
      ],
      Clause: [
        {
          Operator: 'OR',
          PeriodStart: 0,
          Clause: [],
          Negate: false,
          Terms: [
            {
              Term: 'Beethoven',
              Negate: false,
              Proximity: 0,
            },
            {
              Term: 'Shazam',
              Negate: false,
              Proximity: 0,
            },
          ],
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `"Dave" AND ("Doug" OR "Harry") AND "Bob" AND "Jane"`,
      channel: ToWhomDoesItApply.SPEAKER,
      scope: WhereToHappen.TURN,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    expectedResponse: {
      Operator: 'AND',
      Channel: ToWhomDoesItApply.SPEAKER,
      Scope: WhereToHappen.TURN,
      PeriodStart: 0,
      Terms: [
        {
          Term: 'Dave',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'Bob',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'Jane',
          Negate: false,
          Proximity: 0,
        },
      ],
      Clause: [
        {
          Operator: 'OR',
          PeriodStart: 0,
          Clause: [],
          Negate: false,
          Terms: [
            {
              Term: 'Doug',
              Negate: false,
              Proximity: 0,
            },
            {
              Term: 'Harry',
              Negate: false,
              Proximity: 0,
            },
          ],
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `NOT "Dave"`,
      channel: ToWhomDoesItApply.CUSTOMER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    expectedResponse: {
      Operator: 'OR',
      Channel: ToWhomDoesItApply.CUSTOMER,
      Scope: WhereToHappen.ALL,
      PeriodStart: 0,
      Clause: [],
      Terms: [
        {
          Term: 'Dave',
          Negate: true,
          Proximity: 0,
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `NOT "Pencil kill"/3`,
      channel: ToWhomDoesItApply.CUSTOMER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    expectedResponse: {
      Operator: 'OR',
      Channel: ToWhomDoesItApply.CUSTOMER,
      Scope: WhereToHappen.ALL,
      PeriodStart: 0,
      Clause: [],
      Terms: [
        {
          Term: 'Pencil kill',
          Negate: true,
          Proximity: 3,
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `NOT ("Pencil kill"/3 OR "John Wick"/4)`,
      channel: ToWhomDoesItApply.CUSTOMER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    expectedResponse: {
      Operator: 'OR',
      Channel: ToWhomDoesItApply.CUSTOMER,
      Scope: WhereToHappen.ALL,
      PeriodStart: 0,
      Clause: [
        {
          Operator: 'OR',
          Terms: [
            {
              Term: 'Pencil kill',
              Negate: false,
              Proximity: 3,
            },
            {
              Term: 'John Wick',
              Negate: false,
              Proximity: 4,
            },
          ],
          Clause: [],
          PeriodStart: 0,
          Negate: true,
        },
      ],
      Terms: [],
    },
  },
  {
    queryToTest: {
      query: `NOT ("Pencil kill"/3 OR "John Wick"/4) AND "Thanos"/5`,
      channel: ToWhomDoesItApply.CUSTOMER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    expectedResponse: {
      Operator: 'AND',
      Channel: ToWhomDoesItApply.CUSTOMER,
      Scope: WhereToHappen.ALL,
      PeriodStart: 0,
      Clause: [
        {
          Operator: 'OR',
          Terms: [
            {
              Term: 'Pencil kill',
              Negate: false,
              Proximity: 3,
            },
            {
              Term: 'John Wick',
              Negate: false,
              Proximity: 4,
            },
          ],
          Clause: [],
          PeriodStart: 0,
          Negate: true,
        },
      ],
      Terms: [
        {
          Term: 'Thanos',
          Negate: false,
          Proximity: 5,
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `NOT "Pencil kill"/3 OR "John Wick"/4`,
      channel: ToWhomDoesItApply.CUSTOMER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    expectedResponse: {
      Operator: 'OR',
      Channel: ToWhomDoesItApply.CUSTOMER,
      Scope: WhereToHappen.ALL,
      PeriodStart: 0,
      Clause: [],
      Terms: [
        {
          Term: 'Pencil kill',
          Negate: true,
          Proximity: 3,
        },
        {
          Term: 'John Wick',
          Negate: false,
          Proximity: 4,
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `"Pencil kill"/3`,
      channel: ToWhomDoesItApply.CUSTOMER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    expectedResponse: {
      Operator: 'OR',
      Channel: ToWhomDoesItApply.CUSTOMER,
      Scope: WhereToHappen.ALL,
      PeriodStart: 0,
      Clause: [],
      Terms: [
        {
          Term: 'Pencil kill',
          Negate: false,
          Proximity: 3,
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `"Dave"/3 AND NOT "Doug"/4`,
      channel: ToWhomDoesItApply.CUSTOMER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    expectedResponse: {
      Operator: 'AND',
      Channel: ToWhomDoesItApply.CUSTOMER,
      Scope: WhereToHappen.ALL,
      PeriodStart: 0,
      Clause: [],
      Terms: [
        {
          Term: 'Dave',
          Negate: false,
          Proximity: 3,
        },
        {
          Term: 'Doug',
          Negate: true,
          Proximity: 4,
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `NOT "Dave" AND "Bob"`,
      channel: ToWhomDoesItApply.CUSTOMER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    expectedResponse: {
      Operator: 'AND',
      Channel: ToWhomDoesItApply.CUSTOMER,
      Scope: WhereToHappen.ALL,
      PeriodStart: 0,
      Clause: [],
      Terms: [
        {
          Term: 'Dave',
          Negate: true,
          Proximity: 0,
        },
        {
          Term: 'Bob',
          Negate: false,
          Proximity: 0,
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `NOT \n "Dave" \n\n AND \n"Bob"`,
      channel: ToWhomDoesItApply.CUSTOMER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    expectedResponse: {
      Operator: 'AND',
      Channel: ToWhomDoesItApply.CUSTOMER,
      Scope: WhereToHappen.ALL,
      PeriodStart: 0,
      Clause: [],
      Terms: [
        {
          Term: 'Dave',
          Negate: true,
          Proximity: 0,
        },
        {
          Term: 'Bob',
          Negate: false,
          Proximity: 0,
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `NOT ("Pencil kill"/2 OR "John Wick") OR "Thanos"`,
      channel: ToWhomDoesItApply.CUSTOMER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 60,
      },
    },
    expectedResponse: {
      Operator: 'OR',
      PeriodStart: 60,
      Scope: WhereToHappen.ALL,
      Channel: ToWhomDoesItApply.CUSTOMER,
      Terms: [
        {
          Term: 'Thanos',
          Negate: false,
          Proximity: 0,
        },
      ],
      Clause: [
        {
          Operator: 'OR',
          Clause: [],
          PeriodStart: 60,
          Negate: true,
          Terms: [
            {
              Term: 'Pencil kill',
              Negate: false,
              Proximity: 2,
            },
            {
              Term: 'John Wick',
              Negate: false,
              Proximity: 0,
            },
          ],
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `"Dave" OR "Bob" AND NOT ("Jane" OR "Jill")`,
      channel: ToWhomDoesItApply.SPEAKER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 30,
      },
    },
    expectedResponse: {
      Operator: 'OR',
      Channel: ToWhomDoesItApply.SPEAKER,
      Scope: WhereToHappen.ALL,
      PeriodStart: 30,
      Terms: [
        {
          Term: 'Dave',
          Negate: false,
          Proximity: 0,
        },
      ],
      Clause: [
        {
          Operator: 'AND',
          PeriodStart: 30,
          Negate: false,
          Terms: [
            {
              Term: 'Bob',
              Negate: false,
              Proximity: 0,
            },
          ],
          Clause: [
            {
              Operator: 'OR',
              Negate: true,
              Clause: [],
              PeriodStart: 30,
              Terms: [
                {
                  Term: 'Jane',
                  Negate: false,
                  Proximity: 0,
                },
                {
                  Term: 'Jill',
                  Negate: false,
                  Proximity: 0,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `("Bill" AND "Goodbye Sir" /2) OR ("Jane Smith top" /3 AND "Goodbye Lady" /4) OR "Welcom*"`,
      channel: ToWhomDoesItApply.SPEAKER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
        PeriodEnd: 60,
      },
    },
    expectedResponse: {
      Operator: 'OR',
      Channel: ToWhomDoesItApply.SPEAKER,
      Scope: WhereToHappen.ALL,
      PeriodStart: 0,
      PeriodEnd: 60,
      Terms: [
        {
          Term: 'Welcom*',
          Negate: false,
          Proximity: 0,
        },
      ],
      Clause: [
        {
          Operator: 'AND',
          PeriodStart: 0,
          PeriodEnd: 60,
          Negate: false,
          Clause: [],
          Terms: [
            {
              Term: 'Bill',
              Negate: false,
              Proximity: 0,
            },
            {
              Term: 'Goodbye Sir',
              Proximity: 2,
              Negate: false,
            },
          ],
        },
        {
          Operator: 'AND',
          PeriodStart: 0,
          PeriodEnd: 60,
          Negate: false,
          Clause: [],
          Terms: [
            {
              Term: 'Jane Smith top',
              Proximity: 3,
              Negate: false,
            },
            {
              Term: 'Goodbye Lady',
              Proximity: 4,
              Negate: false,
            },
          ],
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `((((((("Dave")) AND "Doug" OR "John Wick")) OR "Eminem" OR("Shazam" AND NOT("Beethoven" OR "Biden") AND "Daenerys Targaryen" /10 AND "Deadpool"))))`,
      channel: ToWhomDoesItApply.AGENT,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 60,
      },
    },
    expectedResponse: {
      Operator: 'OR',
      Channel: ToWhomDoesItApply.AGENT,
      Scope: WhereToHappen.ALL,
      PeriodStart: 60,
      Terms: [
        {
          Term: 'Eminem',
          Negate: false,
          Proximity: 0,
        },
      ],
      Clause: [
        {
          Operator: 'OR',
          PeriodStart: 60,
          Terms: [
            {
              Term: 'John Wick',
              Negate: false,
              Proximity: 0,
            },
          ],
          Clause: [
            {
              Operator: 'AND',
              PeriodStart: 60,
              Terms: [
                {
                  Term: 'Dave',
                  Negate: false,
                  Proximity: 0,
                },
                {
                  Term: 'Doug',
                  Negate: false,
                  Proximity: 0,
                },
              ],
              Clause: [],
              Negate: false,
            },
          ],
          Negate: false,
        },
        {
          Operator: 'AND',
          PeriodStart: 60,
          Terms: [
            {
              Term: 'Daenerys Targaryen',
              Negate: false,
              Proximity: 10,
            },
            {
              Term: 'Deadpool',
              Negate: false,
              Proximity: 0,
            },
          ],
          Clause: [
            {
              Operator: 'AND',
              PeriodStart: 60,
              Terms: [
                {
                  Term: 'Shazam',
                  Negate: false,
                  Proximity: 0,
                },
              ],
              Clause: [
                {
                  Operator: 'OR',
                  PeriodStart: 60,
                  Terms: [
                    {
                      Term: 'Beethoven',
                      Negate: false,
                      Proximity: 0,
                    },
                    {
                      Term: 'Biden',
                      Negate: false,
                      Proximity: 0,
                    },
                  ],
                  Clause: [],
                  Negate: true,
                },
              ],
              Negate: false,
            },
          ],
          Negate: false,
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `cat,dog,bird,I like animals,slug,spide*`,
      channel: ToWhomDoesItApply.SPEAKER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    expectedResponse: {
      Operator: 'OR',
      Channel: ToWhomDoesItApply.SPEAKER,
      Scope: WhereToHappen.ALL,
      PeriodStart: 0,
      Clause: [],
      Terms: [
        {
          Term: 'cat',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'dog',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'bird',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'I like animals',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'slug',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'spide*',
          Negate: false,
          Proximity: 0,
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `"cat","dog","bird","I like animals","slug","spide*"`,
      channel: ToWhomDoesItApply.SPEAKER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    expectedResponse: {
      Operator: 'OR',
      Channel: ToWhomDoesItApply.SPEAKER,
      Scope: WhereToHappen.ALL,
      PeriodStart: 0,
      Clause: [],
      Terms: [
        {
          Term: 'cat',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'dog',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'bird',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'I like animals',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'slug',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'spide*',
          Negate: false,
          Proximity: 0,
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `cat, dog, bird, I like animals,slug`,
      channel: ToWhomDoesItApply.SPEAKER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    expectedResponse: {
      Operator: 'OR',
      Channel: ToWhomDoesItApply.SPEAKER,
      Scope: WhereToHappen.ALL,
      PeriodStart: 0,
      Clause: [],
      Terms: [
        {
          Term: 'cat',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'dog',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'bird',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'I like animals',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'slug',
          Negate: false,
          Proximity: 0,
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `cat,     dog   , bird,      I like animals,  slug`,
      channel: ToWhomDoesItApply.SPEAKER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    expectedResponse: {
      Operator: 'OR',
      Channel: ToWhomDoesItApply.SPEAKER,
      Scope: WhereToHappen.ALL,
      PeriodStart: 0,
      Clause: [],
      Terms: [
        {
          Term: 'cat',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'dog',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'bird',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'I like animals',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'slug',
          Negate: false,
          Proximity: 0,
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `"cat",     "dog"   , "bird",      "I like animals",  "slug"`,
      channel: ToWhomDoesItApply.SPEAKER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    expectedResponse: {
      Operator: 'OR',
      Channel: ToWhomDoesItApply.SPEAKER,
      Scope: WhereToHappen.ALL,
      PeriodStart: 0,
      Clause: [],
      Terms: [
        {
          Term: 'cat',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'dog',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'bird',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'I like animals',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'slug',
          Negate: false,
          Proximity: 0,
        },
      ],
    },
  },
  {
    queryToTest: {
      query: `"cat " OR " dog" OR " bird " OR "  I like       animals  " OR "slug"`,
      channel: ToWhomDoesItApply.SPEAKER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    expectedResponse: {
      Operator: 'OR',
      Channel: ToWhomDoesItApply.SPEAKER,
      Scope: WhereToHappen.ALL,
      PeriodStart: 0,
      Clause: [],
      Terms: [
        {
          Term: 'cat',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'dog',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'bird',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'I like animals',
          Negate: false,
          Proximity: 0,
        },
        {
          Term: 'slug',
          Negate: false,
          Proximity: 0,
        },
      ],
    },
  },
]

export const queriesWithErrorsForTesting: {
  queryToTest: WordsAndPhrasesConvertOptionsType
  errorMessage: string
}[] = [
  {
    queryToTest: {
      query: ``,
      channel: ToWhomDoesItApply.SPEAKER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    errorMessage: ERROR_MESSAGES.REQUIRED_FIELD,
  },
  {
    queryToTest: {
      query: `"Dave" AND "Doug"/11`,
      channel: ToWhomDoesItApply.SPEAKER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    errorMessage: ERROR_MESSAGES.INVALID_PROXIMITY_VALUE,
  },
  {
    queryToTest: {
      query: `"Dave" AND "Doug"/-1`,
      channel: ToWhomDoesItApply.AGENT,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    errorMessage: ERROR_MESSAGES.INVALID_PROXIMITY_PLACE,
  },

  {
    queryToTest: {
      query: `NOT "Dave" AND "Doug" NOT "Hi"`,
      channel: ToWhomDoesItApply.AGENT,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    errorMessage: ERROR_MESSAGES.NOT_OPERATOR_PLACE,
  },
  {
    queryToTest: {
      query: `("Dave") AND "Doug" OR "John")`,
      channel: ToWhomDoesItApply.AGENT,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    errorMessage: ERROR_MESSAGES.INVALID_PARENTHESES_PLACE,
  },
  {
    queryToTest: {
      query: `("Dave") AND "Doug" OR ""John")`,
      channel: ToWhomDoesItApply.AGENT,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    errorMessage: ERROR_MESSAGES.INVALID_OPERATOR_PLACE,
  },
  {
    queryToTest: {
      query: `("Dave") AND (("Doug" OR "John"`,
      channel: ToWhomDoesItApply.AGENT,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    errorMessage:
      'The parentheses or quotation marks are not closed properly. Please check that all parentheses and quotation marks are properly closed and try again.',
  },
  {
    queryToTest: {
      query: `AND "Doug" OR "John"`,
      channel: ToWhomDoesItApply.AGENT,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    errorMessage: ERROR_MESSAGES.INVALID_OPERATOR_PLACE,
  },
  {
    queryToTest: {
      query: `"Doug" AND NOT "John" AND NOT "Dave"`,
      channel: ToWhomDoesItApply.AGENT,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    errorMessage: ERROR_MESSAGES.INVALID_AND_NOT_OPERATOR,
  },
  {
    queryToTest: {
      query: `Doug, John, Dave,`,
      channel: ToWhomDoesItApply.AGENT,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    errorMessage: ERROR_MESSAGES.EMPTY_TERMS,
  },
  {
    queryToTest: {
      query: `Doug, John,, Dave`,
      channel: ToWhomDoesItApply.AGENT,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    errorMessage: ERROR_MESSAGES.EMPTY_TERMS,
  },
  {
    queryToTest: {
      query: `"Doug" OR  "" OR "Dave"`,
      channel: ToWhomDoesItApply.AGENT,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    },
    errorMessage: ERROR_MESSAGES.EMPTY_TERMS,
  },
]
