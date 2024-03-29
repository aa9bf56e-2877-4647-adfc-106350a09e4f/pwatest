self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('pwatest').then((cache) => {
      return cache.addAll([
        '/pwatest',
        'index.html',
        'manifest.json',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
