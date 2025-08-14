const CACHE_NAME = 'soundboard-cache-v1';
const ASSETS = [
  './',           // root
  './index.html', // your main page
  './service-worker.js',
  // add any local CSS, JS, or image files you serve yourself
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
