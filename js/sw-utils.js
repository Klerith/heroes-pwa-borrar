
// Funciones para ayudar al SW
function actualizaCacheDinamico( dynamicCache, req, res ) {

    console.log('Petición a: ', req.url);

    if ( res.ok ) {
        
        return caches.open( dynamicCache ).then( cache => {
    
            cache.put( req, res.clone() );
    
            return res;
        });

    }


}