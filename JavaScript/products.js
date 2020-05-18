document.addEventListener('DOMContentLoaded', () => {

        // CAROUSEL
        const elementosCarousel = document.querySelectorAll('.carousel');
        M.Carousel.init(elementosCarousel, {
                duration: 200,
                dist: -100,
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

        const tituloPrincipal = [ 'CUNAS', 'EXHIBIDORES', 'PROBADORES', 'ESTUCHES', 'EMPAQUES BLISTER', 'MOLDES' ];  

        const URL   = '../docs/imagenesProducts/';
        const rutas = [
        /* CUNAS */             [ `${URL}cunas/imgC1.jpg`, 
                                  `${URL}cunas/imgC2.jpg`, 
                                  `${URL}cunas/imgC3.jpg` ],

        /* EXHIBIDORES */       [ `${URL}exhibidores/imgE1.jpg` ],

        /* PROBADORES */        [ `${URL}probadores/imagen3p.jpg` , 
                                  `${URL}probadores/imagen11p.jpg`, 
                                  `${URL}probadores/imagen12p.jpg` ],

        /* ESTUCHES */          [ `${URL}estuches/imagen4p.jpg`, 
                                  `${URL}estuches/imagen10p.jpg` ],

        /* EMPAQUES BLISTER */  [],

        /* MOLDES */            [`${URL}moldes/imagen1p.jpg`, 
                                 `${URL}moldes/imagen2p.jpg`]
        ]
        
        console.log(rutas[0][0])
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

        
