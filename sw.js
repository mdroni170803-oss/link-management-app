const CACHE_NAME = 'biom-link-v1';
const urlsToCache = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap',
  'https://fonts.googleapis.com/icon?family=Material+Icons'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
