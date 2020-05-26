
self.addEventListener( 'fetch', (ev) => {
    if ( ev.request.url.includes( 'index.css' ) ){
        ev.respondWith( null )
    }else{
        ev.respondWith( fetch( ev.request.url ) )
    }
})
