
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('inventors-cache-v1').then((cache) => {
      return cache.addAll([
        '/index.html',
        '/final-style.css',
        '/script.js',
        '/data.json'
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
