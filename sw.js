//ESCUCHANDO EL EVENTO DE INSTALACIÓN DEL SERVICE WORKER
const CACHE_NAME = 'cache_v1'

self.addEventListener( 'install', ev => {
    ev.waitUntil( saveCache() )
} )
// GUARDANDO EL CACHE
async function saveCache (){
    const  cache = await caches.open( CACHE_NAME )
    return cache.addAll( [
        //index archivo padre
        'index.html',
        //archivos de views
        '/views/contact.html',
        '/views/products.html',

        //archivos JS
        '/JavaScript/API_FACEBOOK.js',
        '/JavaScript/contacto.js',
        '/JavaScript/index.js',
        '/JavaScript/materialize.js',
        '/JavaScript/products.js',

        //archivos mediaQuerys
        '/css/MediaQuery/indexMediaQuery.css',
        '/css/MediaQuery/productsMediaQuerys.css',
        
        //archivos css
        '/css/Api-Facebook.css',
        '/css/botones-redes-sociales.css',
        '/css/contact.css',
        '/css/footer.css',
        '/css/galeriaImagenes.css',
        '/css/header.css',
        '/css/index.css',
        '/css/materialize.css',
        '/css/products.css',

        //archivos docs

        //backgrounds
        '/docs/backgrounds/wa.jpg',
        '/docs/backgrounds/wii.jpg',
        '/docs/backgrounds/wpp2.jpg',

        //icons
        '/docs/icons/api-fb.png',
        '/docs/icons/iconfb.png',
        '/docs/icons/iconig.png',
        '/docs/icons/LOGO.png',
        '/docs/icons/re.ico',

        //imagenes index
        '/docs/imagenesIndex/image1.jpeg',
        '/docs/imagenesIndex/image2.jpeg',
        '/docs/imagenesIndex/image3.jpeg',
        '/docs/imagenesIndex/image4.jpeg',
        '/docs/imagenesIndex/image5.jpeg',

        //imagenes productos cunas
        '/docs/imagenesProducts/cunas/img1C.JPG',
        '/docs/imagenesProducts/cunas/img2C.JPG',
        '/docs/imagenesProducts/cunas/img3C.JPG',

        //imagenes productos empaques Blister
        '/docs/imagenesProducts/empaquesBlister/img1B.JPG',

        //imagenes productos estuches
        '/docs/imagenesProducts/estuches/img1E.JPG',
        '/docs/imagenesProducts/estuches/img2E.JPG',
        '/docs/imagenesProducts/estuches/img3E.JPG',

        //imagenes productos exhibidores
        '/docs/imagenesProducts/exhibidores/img1EX.JPG',
        '/docs/imagenesProducts/exhibidores/img1EX.JPG',

        //imagenes productos moldes
        '/docs/imagenesProducts/moldes/img1M.JPG',

        //imagenes otros productos
        '/docs/imagenesProducts/otrosProductos/img1O.JPG',
        '/docs/imagenesProducts/otrosProductos/img2O.JPG',
        '/docs/imagenesProducts/otrosProductos/img3O.JPG',

        //imagenes productos probadore

        '/docs/imagenesProducts/probadores/img1P.JPG',
        '/docs/imagenesProducts/probadores/img2P.JPG',
        '/docs/imagenesProducts/probadores/img3P.JPG',
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

