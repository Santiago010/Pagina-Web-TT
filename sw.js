//ESCUCHANDO EL EVENTO DE INSTALACIÓN DEL SERVICE WORKER
const CACHE_NAME = 'cache_v1'

self.addEventListener( 'install', ev => {
    ev.waitUntil( saveCache() )
} )
// GUARDANDO EL CACHE
async function saveCache (){
    const  cache = await caches.open( CACHE_NAME )
    return cache.addAll( [
        '/',
        //CARPETA VIEWS
        '/views/index.html',
        '/views/products.html',
        '/views/contact.html',
        //CARPETA JAVASCRIPT
        '/JavaScript/index.js',
        '/JavaScript/products.js',
        '/JavaScript/contacto.js',
        '/JavaScript/materialize.js',
        '/JavaScript/API_FACEBOOK.js',
        //IMAGENES
        '/docs/backgrounds/wa.jpg',
        '/docs/backgrounds/wii.jpeg',
        '/docs/backgrounds/wpp.jpg',
        '/docs/backgrounds/wpp2.jpg',
    
        '/docs/icons/api-fb.png',
        '/docs/icons/iconfb.png',
        '/docs/icons/iconig.png',
        '/docs/icons/LOGO.png',
        '/docs/icons/LOGOJG.png',
        '/docs/icons/re.ico',
    
        '/docs/imagenesIndex/image1.jpeg',
        '/docs/imagenesIndex/image2.jpeg',
        '/docs/imagenesIndex/image3.jpeg',
        '/docs/imagenesIndex/image4.jpeg',
        '/docs/imagenesIndex/image5.jpeg',
    
        '/docs/imagenesProducts/cunas/img1C.jpg',
        '/docs/imagenesProducts/cunas/img2C.jpg',
        '/docs/imagenesProducts/cunas/img3C.jpg',
    
        '/docs/imagenesProducts/empaquesBlister/img1B.jpg',
    
        '/docs/imagenesProducts/estuches/img1E.jpg',
        '/docs/imagenesProducts/estuches/img2E.jpg',
        '/docs/imagenesProducts/estuches/img3E.jpg',
    
        '/docs/imagenesProducts/exhibidores/img1EX.jpg',
        '/docs/imagenesProducts/exhibidores/img2EX.jpg',
    
        '/docs/imagenesProducts/moldes/img1M.jpg',     
        
        '/docs/imagenesProducts/otrosProductos/img1O.jpg',
        '/docs/imagenesProducts/otrosProductos/img2O.jpg',
        '/docs/imagenesProducts/otrosProductos/img3O.jpg',
    
        '/docs/imagenesProducts/probadores/img1P.jpg',
        '/docs/imagenesProducts/probadores/img2P.jpg',
        '/docs/imagenesProducts/probadores/img3P.jpg',
        //CSS
        '/css/Api-Facebook.css',
        '/css/botones-redes-sociales.css',
        '/css/contact.css',
        '/css/footer.css',
        '/css/header.css',
        '/css/index.css',
        '/css/materialize.css',
        '/css/products.css',
    
        '/css/MediaQuery/indexMediaQuery.css',
        '/css/MediaQuery/productsMediaQuerys.css',
    ] )
}

self.addEventListener( 'fetch', ev => {
    const request = ev.request

    if ( request.method !== 'GET' ) {
        return
    }   
    //RESPONDER LA PETICION, BUSCANDO EN EL CACHE
    ev.respondWith( searchCache(request) )

    //BUSCA UNA NUEVA VERSION Y ACTUALIZA
    ev.waitUntil( updateCache(request) )
} )

async function searchCache (request) {
    const cache = await caches.open( CACHE_NAME )
    const res   = await cache.match(request)
    return res || fetch(request)
}

async function updateCache (request){
    const cache = await caches.open( CACHE_NAME )
    const res   = await fetch(request)
    return cache.put( request, res )
}

