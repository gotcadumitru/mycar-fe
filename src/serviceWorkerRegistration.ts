/* eslint-disable no-console */
// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://cra.link/PWA

const registerValidSW = async () => {
  try {
    const registration = await navigator.serviceWorker.register('sw.js')
    registration.onupdatefound = () => {
      const installingWorker = registration.installing
      if (installingWorker == null) {
        return
      }
      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log(
              'New content is available and will be used when all ' +
                'tabs for this page are closed. See https://cra.link/PWA.',
            )
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.')
          }
        }
      }
    }
  } catch (error) {
    console.error('Error during service worker registration:', error)
  }
}

export const register = async () => {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      registerValidSW()
    })
  }
}
