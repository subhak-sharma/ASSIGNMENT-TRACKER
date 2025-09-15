const CACHE_NAME = 'assignment-tracker-single-v1';
const ASSETS = ['/', '/index.html','/manifest.json','/sw.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS))); self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME?caches.delete(k):null)))); self.clients.claim();});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{if(r&&r.status===200){const copy=r.clone();caches.open(CACHE_NAME).then(cache=>cache.put(e.request,copy));}return r;})).catch(()=>caches.match('/index.html'))));
});
