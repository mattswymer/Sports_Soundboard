/**
 * @file service-worker.js
 * @description Cache-first strategy with offline fallback.
 *   - Caches app shell + CDN assets on install (F1)
 *   - clients.claim() for immediate control (F2)
 *   - Offline fallback page returned on navigation failure (F8)
 */

const CACHE_VERSION = 3;
const CACHE_NAME = `soundboard-cache-v${CACHE_VERSION}`;

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/wavesurfer.js@7',
  'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=DM+Mono:wght@400;500&display=swap',
];

const OFFLINE_FALLBACK = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sports Soundboard – Offline</title>
  <style>
    body { background: #0d1117; color: #f0f6fc; font-family: sans-serif;
           display: flex; flex-direction: column; align-items: center;
           justify-content: center; min-height: 100vh; margin: 0; gap: 1rem; }
    h1  { font-size: 2rem; margin: 0; }
    p   { color: #8b949e; }
    button { background: #238636; color: #fff; border: none; padding: .75rem 2rem;
             border-radius: .5rem; cursor: pointer; font-size: 1rem; }
  </style>
</head>
<body>
  <h1>📡 You're Offline</h1>
  <p>The soundboard couldn't load. Check your connection and try again.</p>
  <button onclick="location.reload()">Retry</button>
</body>
</html>`;

// ── Install: pre-cache everything ───────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
      .catch(err => console.error('[SW] Install cache failed:', err))
  );
});

// ── Activate: purge old caches + claim clients immediately (F2) ──────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ── Fetch: cache-first, network fallback, offline page for navigations (F8) ──
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        // Opportunistically cache successful same-origin responses
        if (response.ok && new URL(event.request.url).origin === self.location.origin) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Navigation failure → serve offline page (F8)
        if (event.request.mode === 'navigate') {
          return new Response(OFFLINE_FALLBACK, { headers: { 'Content-Type': 'text/html' } });
        }
      });
    })
  );
});
