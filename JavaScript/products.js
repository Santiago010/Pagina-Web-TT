import './API_FACEBOOK.js'
document.addEventListener('DOMContentLoaded', () => {

        // CAROUSEL
        const elementosCarousel = document.querySelectorAll('.carousel');
        M.Carousel.init(elementosCarousel, {
                duration: 150,
                dist: -200,
                shift: 5,
                padding: 5,
                numVisible : 3,
                indicators:true,
                noWrap : false,
        });

        /* CAROUSEL IMAGES */
        const botones     = document.querySelectorAll('.btn-ghost');    // BOTONES PRODUCTOS
        const titulos     = document.querySelectorAll('.productos');    // TITULOS CAROUSEL
        const imagenes    = document.querySelectorAll('.img');          //IMAGENES CARRUSEL (3)
        const description = document.getElementById('description');     //DESCRIPCIÓN PRODUCTO

        const descriptions = [  'En estas imágenes se puede observar unas pequeñas muestras del trabajo que realizamos con cunas'           ,
                                'En estas imágenes se puede observar unas pequeñas muestras del trabajo que realizamos con exhibidores'     ,
                                'En estas imágenes se puede observar unas pequeñas muestras del trabajo que realizamos con probadores'      ,
                                'En estas imágenes se puede observar unas pequeñas muestras del trabajo que realizamos con estuches'        ,
                                'En estas imágenes se puede observar unas pequeñas muestras del trabajo que realizamos con empaques blister',
                                'En estas imágenes se puede observar unas pequeñas muestras del trabajo que realizamos con moldes'            ];     

        const tituloPrincipal = [ 'Cunas', 'Exhibidores', 'Probadores', 'Estuches', 'Empaques Blister', 'Moldes' ];  

        const URL   = '../docs/imagenesProducts/';
        const rutas = [
        // /* CUNAS */             [ `${URL}cunas/imgC1.jpg`, 
        //                           `${URL}cunas/imgC2.jpg`, 
        //                           `${URL}cunas/imgC3.jpg` ],

        // /* EXHIBIDORES */       [ `${URL}exhibidores/imgE1.jpg` ],

        // /* PROBADORES */        [ `${URL}probadores/imgP1.jpg` , 
        //                           `${URL}probadores/imgP2.jpg`, 
        //                           `${URL}probadores/imgP3.jpg` ],

        // /* ESTUCHES */          [ `${URL}estuches/imgE1.jpg`, 
        //                           `${URL}estuches/imgE2.jpg` ],

        // /* EMPAQUES BLISTER */  [],

        // /* MOLDES */            [`${URL}moldes/imagen1P.jpg`, 
        //                          `${URL}moldes/imagen2P.jpg`,
        //                          `${URL}moldes/imagen3P.jpg`,
        //                         ]
        ]
        
        botones.forEach( (elemento, index) => elemento.addEventListener('click', ()=>{
                
                description.textContent = descriptions[index];
                titulos.forEach( elemento2 => elemento2.textContent = tituloPrincipal[index])
                imagenes.forEach( (elemento3, index2) => elemento3.setAttribute('src', rutas[index][index2]));

        }));
        document.getElementById('otros').addEventListener('click', () => window.open( '../views/others.html' ) )
});

        
