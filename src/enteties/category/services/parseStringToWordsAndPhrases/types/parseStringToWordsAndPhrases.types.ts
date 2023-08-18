// Type definitions for nested arrays
export type NestedArrayElement = string | (string | NestedArray)[]
export type NestedArray = NestedArrayElement[]
