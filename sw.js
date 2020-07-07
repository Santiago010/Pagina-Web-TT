const CACHE = "cache_v1";

const element = [
  "/",
  "/index.html",
  "/css/MediaQuery/contactMediaQuery.css",
  "/css/MediaQuery/indexMediaQuery.css",
  "/css/MediaQuery/productsMediaQuerys.css",
  "/css/Api-Facebook.css",
  "/css/botones-redes-sociales.css",
  "/css/contact.css",
  "/css/footer.css",
  "/css/galeriaImagenes.css",
  "/css/header.css",
  "/css/index.css",
  "/css/materialize.css",
  "/css/products.css",
  "/docs/backgrounds/img_contact.jpg",
  "/docs/icons/favicon.ico",
  "/docs/icons/iconF.ico",
  "/docs/icons/iconFC.ico",
  "/docs/icons/iconI.ico",
  "/docs/icons/iconM.ico",
  "/docs/imagenesIndex/imgB (1).jpg",
  "/docs/imagenesIndex/imgB (2).jpg",
  "/docs/imagenesIndex/imgB (3).jpg",
  "/docs/imagenesIndex/imgB (4).jpg",
  "/docs/imagenesProducts/cunas/img1C.JPG",
  "/docs/imagenesProducts/cunas/img2C.JPG",
  "/docs/imagenesProducts/cunas/img3C.JPG",
  "/docs/imagenesProducts/empaquesBlister/img1B.JPG",
  "/docs/imagenesProducts/empaquesBlister/img2B.JPG",
  "/docs/imagenesProducts/empaquesBlister/img3B.JPG",
  "/docs/imagenesProducts/estuches/img1E.JPG",
  "/docs/imagenesProducts/estuches/img2E.JPG",
  "/docs/imagenesProducts/estuches/img3E.JPG",
  "/docs/imagenesProducts/exhibidores/img1EX.JPG",
  "/docs/imagenesProducts/exhibidores/img2EX.JPG",
  "/docs/imagenesProducts/exhibidores/img3EX.JPG",
  "/docs/imagenesProducts/moldes/img1M.JPG",
  "/docs/imagenesProducts/moldes/img2M.JPG",
  "/docs/imagenesProducts/moldes/img3M.JPG",
  "/docs/imagenesProducts/otrosProductos/img10O.JPG",
  "/docs/imagenesProducts/otrosProductos/img11O.JPG",
  "/docs/imagenesProducts/otrosProductos/img12O.JPG",
  "/docs/imagenesProducts/otrosProductos/img1O.JPG",
  "/docs/imagenesProducts/otrosProductos/img2O.JPG",
  "/docs/imagenesProducts/otrosProductos/img3O.JPG",
  "/docs/imagenesProducts/otrosProductos/img4O.JPG",
  "/docs/imagenesProducts/otrosProductos/img5O.JPG",
  "/docs/imagenesProducts/otrosProductos/img6O.JPG",
  "/docs/imagenesProducts/otrosProductos/img7O.JPG",
  "/docs/imagenesProducts/otrosProductos/img8O.JPG",
  "/docs/imagenesProducts/otrosProductos/img9O.JPG",
  "/docs/imagenesProducts/probadores/img1P.JPG",
  "/docs/imagenesProducts/probadores/img2P.JPG",
  "/docs/imagenesProducts/probadores/img3P.JPG",
  "/JavaScript/API_FACEBOOK.js",
  "/JavaScript/contact.js",
  "/JavaScript/index.js",
  "/JavaScript/materialize.js",
  "/JavaScript/products.js",
  "/views/contact.html",
  "/views/products.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(preCache());
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  if (req.method !== "GET") {
    return;
  }

  event.respondWith(cachedResponse(req));

  event.waitUntil(updateCache(req));
});

async function preCache() {
  const cache = await caches.open(CACHE);
  return cache.addAll(element);
}

async function cachedResponse(req) {
  const cache = await caches.open(CACHE);
  const response = await cache.match(req);
  return response || fetch(req);
}

async function updateCache(req) {
  const cache = await caches.open(CACHE);
  const response = await fetch(req);
  return cache.put(req, response);
}
