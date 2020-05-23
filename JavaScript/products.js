

// CAROUSEL
// >>>>>>> 2a66d37476852e2f4078b35d2f2f5ea60938079d
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
        /* CUNAS */             [ `${URL}cunas/img1C.JPG`, 
                                  `${URL}cunas/img2C.JPG`, 
                                  `${URL}cunas/img3C.JPG` ],

        /* EXHIBIDORES */       [ `${URL}exhibidores/img1EX.JPG`,
                                `${URL}exhibidores/img2EX.JPG`
                                ],

        /* PROBADORES */        [ `${URL}probadores/img1P.JPG` , 
                                  `${URL}probadores/img2P.JPG`, 
                                  `${URL}probadores/img3P.JPG` ],

        /* ESTUCHES */          [ `${URL}estuches/img1E.JPG`, 
                                  `${URL}estuches/img2E.JPG`,
                                  `${URL}estuches/img3E.JPG`
                                 ],

        /* EMPAQUES BLISTER */  [`${URL}empaquesBlister/img1B.JPG`],

        /* MOLDES */            [`${URL}moldes/img1M.JPG` 
                                ],
        /* OTROS */             [``]
        ]
        
        botones.forEach( (elemento, index) => elemento.addEventListener('click', ()=>{
                
                description.textContent = descriptions[index];
                titulos.forEach( elemento2 => elemento2.textContent = tituloPrincipal[index])
                imagenes.forEach( (elemento3, index2) => elemento3.setAttribute('src', rutas[index][index2]));

        }));

        // API FACEBOOK
        let   band     = 0;
        const chat     = document.getElementById('chat');
        const buttonFb = document.getElementById('buttonFb');
        buttonFb.addEventListener('click', mostrarOcultar);

        function mostrarOcultar () {
                if(band === 0){
                        chat.classList.add('mostrarOcultar');
                        band = 1;
                }else{
                        chat.classList.remove('mostrarOcultar');
                        band = 0;
                }
        }

});

        
