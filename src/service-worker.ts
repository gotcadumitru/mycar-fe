/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals,no-underscore-dangle */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from 'workbox-core'
import * as navigationPreload from 'workbox-navigation-preload'
import { precacheAndRoute } from 'workbox-precaching'

declare const self: ServiceWorkerGlobalScope

clientsClaim()

precacheAndRoute(self.__WB_MANIFEST)

const CACHE = 'pwabuilder-page'

const offlineFallbackPage = 'offline.html'
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})
self.addEventListener('install', async (event) =>
  event.waitUntil(caches.open(CACHE).then((cache) => cache.add(offlineFallbackPage))),
)

navigationPreload.enable()

self.addEventListener('fetch', (event) =>
  event.respondWith(
    caches.match(event.request).then((response) => (
        response ||
        fetch(event.request).catch(() => caches.match(offlineFallbackPage))
      )),
  ),
)
