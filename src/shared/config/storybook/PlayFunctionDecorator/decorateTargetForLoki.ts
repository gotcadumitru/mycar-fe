// this file is only for testing
import type { PlayFunction } from '@storybook/csf'
import type { ReactRenderer } from '@storybook/react'

const createAsyncCallback = (win: any = window) => {
  const registerPendingPromise = win.loki?.registerPendingPromise
  let resolveAsyncStory: any
  if (registerPendingPromise) {
    registerPendingPromise(
      new Promise((resolve) => {
        resolveAsyncStory = resolve
      }),
    )
  }

  return () => {
    if (resolveAsyncStory) {
      resolveAsyncStory()
    }
  }
}

export const checkIsLokiRunning = (win: any = window) => Boolean(win.loki?.isRunning)

const waitForDocumentLoaded = (): Promise<void> => {
  if (document.readyState === 'loading') {
    return new Promise((resolve) => {
      document.addEventListener('DOMContentLoaded', async () => {
        const allImages = Array.from(document.images)
        await Promise.all(
          allImages
            .filter((img) => !img.complete)
            .map(
              (img) =>
                new Promise((r) => {
                  img.onload = r
                  img.onerror = r
                }),
            ),
        )
        if (allImages.length) {
          setTimeout(resolve, 1000)
        } else {
          resolve()
        }
      })
    })
  }

  return Promise.resolve()
}

const enablePointerEvents = () => {
  const styleElement = document.createElement('style')
  document.documentElement.appendChild(styleElement)
  styleElement.sheet?.insertRule('* {pointer-events: auto !important}')
}

export const decoratePlayFunctionForLoki =
  (target: PlayFunction<ReactRenderer, object>) => async (context: any) => {
    const isLokiRunning = checkIsLokiRunning()
    const asyncCallback = createAsyncCallback()

    if (isLokiRunning) {
      await waitForDocumentLoaded()

      enablePointerEvents()
    }

    try {
      await target(context)
    } finally {
      asyncCallback()
    }
  }
