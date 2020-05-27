//ESCUCHANDO EL EVENTO DE INSTALACIÓN DEL SERVICE WORKER
self.addEventListener( 'install', ev => {
    const cachePromise = caches.open('version-1')
    .then( cache => {
        return cache.addAll( [
            '/',
            '/views/index.html',
            '/views/products.html',
            '/views/contact.html',
            '/views/others.html',
            '/JavaScript/index.js',
            '/JavaScript/products.js',
            '/JavaScript/contacto.js',
            '/JavaScript/materialize.js',
            '/JavaScript/API_FACEBOOK.js',
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
        ] )
    } )
    ev.waitUntil( cachePromise )
} );