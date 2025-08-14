const CACHE_NAME = 'sb-cache-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(clients.claim()));

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.destination === 'audio' || req.url.match(/\.(mp3|wav|ogg)$/i)) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const match = await cache.match(req);
        if (match) return match;
        const resp = await fetch(req);
        cache.put(req, resp.clone());
        return resp;
      })
    );
  }
});