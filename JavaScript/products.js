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
        /*const rutas = [
                     [ `${URL}cunas/imgC1.jpg`, 
                                   `${URL}cunas/imgC2.jpg`, 
                                   `${URL}cunas/imgC3.jpg` ],

                [ `${URL}exhibidores/imgE1.jpg` ],

                [ `${URL}probadores/imgP1.jpg` , 
                                   `${URL}probadores/imgP2.jpg`, 
                                   `${URL}probadores/imgP3.jpg` ],

                   [ `${URL}estuches/imgE1.jpg`, 
                                   `${URL}estuches/imgE2.jpg` ],

           [],

                    [`${URL}moldes/imagen1P.jpg`, 
                                  `${URL}moldes/imagen2P.jpg`,
                                  `${URL}moldes/imagen3P.jpg`,
                                 ]
        ]*/

        const rutas = [
                //imagenes productos cunas
                [`${URL}cunas/img1C.JPG`,
                `${URL}cunas/img2C.JPG`,
                `${URL}cunas/img3C.JPG`],

                //imagenes productos exhibidores
                [`${URL}exhibidores/img1EX.JPG`,
                `${URL}exhibidores/img2EX.JPG`,
                /*`${URL}exhibidores/img3EX.JPG`*/],

                //imagenes productos probadores
                [`${URL}probadores/img1P.JPG`,
                `${URL}probadores/img2P.JPG`,
                `${URL}probadores/img3P.JPG`],

                //imagenes productos estuches
                [`${URL}estuches/img1E.JPG`,
                `${URL}estuches/img2E.JPG`,
                `${URL}estuches/img3E.JPG`],

                //imagenes productos empaques blister
                [`${URL}empaquesBlister/img1B.JPG`,
                /*`${URL}empaquesBlister/img2B.JPG`,*/
                /*`${URL}empaquesBlister/img3B.JPG`*/],

                //imagenes productos moldes
                [`${URL}moldes/img1M.JPG`,
                /*`${URL}moldes/img2M.JPG`,*/
                /*`${URL}moldes/img3M.JPG`*/],
        ]
        
        botones.forEach( (elemento, index) => elemento.addEventListener('click', ()=>{
                
                description.textContent = descriptions[index];
                titulos.forEach( elemento2 => elemento2.textContent = tituloPrincipal[index])
                imagenes.forEach( (elemento3, index2) => elemento3.setAttribute('src', rutas[index][index2]));

        }));
        //document.getElementById('otros').addEventListener('click', () => window.open( '../views/others.html' ) );
});

        
