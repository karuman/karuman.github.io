// Specify Cache File
var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = [
    '/poster-keisuke.github.io/',
];

// Install process
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// Cache re-load when resource pre-fetch
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response ? response : fetch(event.request);
            })
    );
});
