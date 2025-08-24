/**
 * @file service-worker.js
 * @description This service worker handles caching of application assets for offline functionality.
 * It uses a "cache-first, then network" strategy.
 */

// ===================================================================
// A. CONFIGURATION
// ===================================================================

/**
 * @const {string} CACHE_NAME
 * The name of the cache storage. Using a version number (e.g., 'v2')
 * is a best practice. When you update your app's assets, you can
 * increment this version number to ensure the new service worker
 * installs and replaces the old one, and old caches are cleaned up.
 */
const CACHE_NAME = 'soundboard-cache-v2';

/**
 * @const {string[]} ASSETS_TO_CACHE
 * An array of asset URLs to be pre-cached when the service worker is installed.
 * This ensures that the core application shell is available offline immediately.
 */
const ASSETS_TO_CACHE = [
  './',           // The root of the application (index.html).
  './index.html', // Explicitly cache the main HTML file.
  // Add paths to any other critical local assets like CSS, JS, or images here.
  // Example: './css/style.css', './js/main.js'
];


// ===================================================================
// B. SERVICE WORKER LIFECYCLE EVENTS
// ===================================================================

/**
 * The 'install' event is fired when the service worker is first registered.
 * Its primary job is to open the cache and pre-cache all the essential app assets.
 */
self.addEventListener('install', event => {
  console.log('[Service Worker] Install event fired.');
  // waitUntil() ensures the service worker won't be considered 'installed'
  // until the code inside has successfully completed.
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching application shell assets.');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch(error => {
        console.error('[Service Worker] Failed to cache assets during install:', error);
      })
  );
});

/**
 * The 'activate' event is fired after the 'install' event and when the
 * service worker takes control of the page. This is the ideal place to
 * clean up old, unused caches to save storage space and prevent conflicts.
 */
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activate event fired.');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // If a cache's name is not the current CACHE_NAME, it's an old cache.
          if (cacheName !== CACHE_NAME) {
            console.log(`[Service Worker] Deleting old cache: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

/**
 * The 'fetch' event intercepts all network requests made by the page.
 * This allows us to define how to respond, e.g., by serving from the cache.
 *
 * Strategy: Cache-First, then Network
 * 1. We check if a matching response exists in the cache.
 * 2. If it does, we return the cached response immediately.
 * 3. If it doesn't, we proceed with the original network request using fetch().
 */
self.addEventListener('fetch', event => {
  // We only want to handle GET requests for our caching strategy.
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // If a cached response is found, return it.
        if (cachedResponse) {
          // console.log(`[Service Worker] Serving from cache: ${event.request.url}`);
          return cachedResponse;
        }
        // Otherwise, fetch the resource from the network.
        // console.log(`[Service Worker] Fetching from network: ${event.request.url}`);
        return fetch(event.request);
      })
      .catch(error => {
        console.error('[Service Worker] Error during fetch:', error);
        // You could optionally return a fallback offline page here if the fetch fails.
      })
  );
});
