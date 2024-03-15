self.addEventListener('install', function (event) {
  console.log('Service worker installing...');
  event.waitUntil(
    caches.open('pwa-cache').then(function (cache) {
      cache.addAll(['/', '/index.html', '/src/css/app.css', '/src/js/app.js']);
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  console.log('Fetching:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activating...');
});
