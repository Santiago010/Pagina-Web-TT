const CACHE = "cache_v1";

const element = [
  "/",
  "/index.html",
  "/views/contact.html",
  "/views/products.html",
  "/JavaScript/API_FACEBOOK.js",
  "/JavaScript/contact.js",
  "/JavaScript/index.js",
  "/JavaScript/product.js",
  "/docs/backgrounds/TermoformadosJG.jpg",
  "/docs/icons/iconF.ico",
  "/docs/icons/iconFC.ico",
  "/docs/icons/iconI.ico",
  "/docs/icons/iconM.ico",
  "/docs/icons/TermoformadosJG.ico",
  "/docs/ImagesIndex/imgB1.jpg",
  "/docs/ImagesIndex/imgB2.jpg",
  "/docs/ImagesIndex/imgB3.jpg",
  "/docs/ImagesIndex/imgB4.jpg",
  "/docs/ImagesProducts/cunas/img1C.JPG",
  "/docs/ImagesProducts/cunas/img2C.JPG",
  "/docs/ImagesProducts/cunas/img3C.JPG",
  "/docs/ImagesProducts/empaquesBlister/img1B.JPG",
  "/docs/ImagesProducts/empaquesBlister/img2B.JPG",
  "/docs/ImagesProducts/empaquesBlister/img3B.JPG",
  "/docs/ImagesProducts/estuches/img1E.JPG",
  "/docs/ImagesProducts/estuches/img2E.JPG",
  "/docs/ImagesProducts/estuches/img3E.JPG",
  "/docs/ImagesProducts/exhibidores/img1EX.JPG",
  "/docs/ImagesProducts/exhibidores/img2EX.JPG",
  "/docs/ImagesProducts/exhibidores/img3EX.JPG",
  "/docs/ImagesProducts/GaleriaProductos/1-Estuche-TermoformadosJG.jpg",
  "/docs/ImagesProducts/GaleriaProductos/1-Probador-TermoformadosJG.jpg",
  "/docs/ImagesProducts/GaleriaProductos/2-Estuches-TermoformadosJG.jpg",
  "/docs/ImagesProducts/GaleriaProductos/2-Muestrario-TermoformadosJG.jpg",
  "/docs/ImagesProducts/GaleriaProductos/2-Probador-TermoformadosJG.jpg",
  "/docs/ImagesProducts/GaleriaProductos/Empaque-Blister-Termoformadosjg.jpg",
  "/docs/ImagesProducts/GaleriaProductos/Muestrario-Esmaltes-TermoformadosJG.jpg",
  "/docs/ImagesProducts/GaleriaProductos/Muestrario-Labial-TermoformadosJG.jpg",
  "/docs/ImagesProducts/GaleriaProductos/Muestrario-TermoformadosJG.jpg",
  "/docs/ImagesProducts/GaleriaProductos/Paleta-Colores-TermoformadosJG.jpg",
  "/docs/ImagesProducts/GaleriaProductos/Paleta-Maquillaje-TermoformadosJG.jpg",
  "/docs/ImagesProducts/GaleriaProductos/Tapa-Termoformada-TermoformadosJG.jpg",
  "/docs/ImagesProducts/moldes/img1M.JPG",
  "/docs/ImagesProducts/moldes/img2M.JPG",
  "/docs/ImagesProducts/moldes/img3M.JPG",
  "/docs/ImagesProducts/probadores/img1P.JPG",
  "/docs/ImagesProducts/probadores/img2P.JPG",
  "/docs/ImagesProducts/probadores/img3P.JPG",
  "/css/MediaQuery/contactMediaQuery.css",
  "/css/MediaQuery/indexMediaQuery.css",
  "/css/MediaQuery/productsMediaQuery.css",
  "/css/Api-Facebook.css",
  "/css/botones-redes-sociales.css",
  "/css/contact.css",
  "/css/footer.css",
  "/css/galeriaImagenes.css",
  "/css/header.css",
  "/css/index.css",
  "/css/products.css"

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
