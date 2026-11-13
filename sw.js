
const CACHE_NAME = "usmani-print-pwa-v4";

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();

            const pageURL = new URL(request.url);
            const pagePath = pageURL.pathname;

            const isAppPage =
              pagePath.endsWith("/") ||
              pagePath.endsWith("/index.html");

            if (isAppPage) {
              caches.open(CACHE_NAME)
                .then(cache => cache.put("./index.html", copy));
            }

            if (pagePath.endsWith("/admin.html")) {
              caches.open(CACHE_NAME)
                .then(cache => cache.put("./admin.html", copy));
            }
          }

          return response;
        })
        .catch(() => {
          const pagePath = new URL(request.url).pathname;

          if (pagePath.endsWith("/admin.html")) {
            return caches.match("./admin.html");
          }

          return caches.match("./index.html")
            .then(cached => cached || caches.match("./"));
        })
    );

    return;
  }

  event.respondWith(
    caches.match(request)
      .then(cached => {
        if (cached) return cached;

        return fetch(request).then(response => {
          if (response && response.ok) {
            const copy = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => cache.put(request, copy));
          }

          return response;
        });
      })
  );
});
