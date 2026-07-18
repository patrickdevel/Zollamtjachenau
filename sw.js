const CACHE_NAME = 'zollamt-cache-v1';
const ASSETS = [
  './',
  './favicon.png'
  // Füge hier weitere Dateien hinzu, die offline verfügbar sein sollen
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
