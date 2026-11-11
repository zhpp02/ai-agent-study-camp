
const CACHE = 'agent-study-camp-v3-cache';

const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest'
];

// 安装新版缓存，并立即激活
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// 删除旧缓存，并接管页面
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key => key !== CACHE)
            .map(key => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

// 页面优先获取网络新版，断网时使用缓存
self.addEventListener('fetch', event => {
  const request = event.request;

  if (request.method !== 'GET') return;

  const isPage =
    request.mode === 'navigate' ||
    new URL(request.url).pathname.endsWith('/index.html');

  if (isPage) {
    event.respondWith(
      fetch(request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE).then(cache =>
            cache.put(request, copy)
          );
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
  } else {
    event.respondWith(
      caches.match(request).then(cached => {
        return cached || fetch(request).then(response => {
          const copy = response.clone();
          caches.open(CACHE).then(cache =>
            cache.put(request, copy)
          );
          return response;
        });
      })
    );
  }
});
