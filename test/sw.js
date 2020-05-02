// ServiceWorkerProc：https://developers.google.com/web/fundamentals/primers/service-workers/?hl=ja

// Cache and File
var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = [
    '/pwa/',
    '/pwa/css/style.css',
    '/pwa/drawer.js'
];

// Install Process
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// Re-Load
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response ? response : fetch(event.request);
            })
    );
});
