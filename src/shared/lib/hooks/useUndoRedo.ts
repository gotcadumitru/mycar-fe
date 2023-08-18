import { useState } from 'react'

type History<T> = {
  past: T[]
  present: T
  future: T[]
}

export default function useUndo<T>(
  initial: T,
): [T, () => void, () => void, (value: T) => void, () => void] {
  const [history, setHistory] = useState<History<T>>({
    past: [],
    present: initial,
    future: [],
  })

  const undo = () => {
    setHistory((prev) => {
      if (prev.past.length === 0) {
        return prev
      }

      const [newPresent, ...newPast] = prev.past.reverse()
      return {
        past: newPast.reverse(),
        present: newPresent,
        future: [prev.present, ...prev.future],
      }
    })
  }

  const redo = () => {
    setHistory((prev) => {
      if (prev.future.length === 0) {
        return prev
      }

      const [newPresent, ...newFuture] = prev.future
      return {
        past: [...prev.past, prev.present],
        present: newPresent,
        future: newFuture,
      }
    })
  }

  const set = (value: T) => {
    setHistory((prev) => {
      const newPast = [...prev.past, prev.present]

      return {
        past: newPast,
        present: value,
        future: [],
      }
    })
  }

  const reset = () => {
    setHistory({
      past: [],
      present: initial,
      future: [],
    })
  }

  return [history.present, undo, redo, set, reset]
}
