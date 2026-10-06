// /kb/ ya no es la app (06-oct-2026: KairosBets vive en https://kairosbets.pages.dev). Si un móvil tenía este service
// worker, se da de baja solo y borra su caché («kb-/kb/-…»).
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => {
  e.waitUntil(
    self.registration.unregister()
      .then(() => caches.keys())
      .then((ks) => Promise.all(ks.filter((k) => k.startsWith("kb-/kb/-")).map((k) => caches.delete(k))))
  );
});
