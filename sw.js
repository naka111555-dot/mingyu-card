// Service Worker kill switch v11
self.addEventListener("install", function(event) {
  self.skipWaiting();
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    (async function() {
      const keys = await caches.keys();
      await Promise.all(keys.map(function(key) { return caches.delete(key); }));
      await self.registration.unregister();
      const clientList = await clients.matchAll({ type: "window", includeUncontrolled: true });
      clientList.forEach(function(client) {
        client.navigate(client.url);
      });
    })()
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(fetch(event.request));
});
