/*const arrayImg = ['../docs/image1.jpeg',
                  '../docs/image2.jpeg',
                  '../docs/image3.jpeg',
                  '../docs/image4.jpeg',
                  '../docs/image5.jpeg',
                  '../docs/image6.jpeg', 
                  '../docs/image7.jpeg'];
const imgs = document.querySelectorAll('.carousel-items__img');

class Imgs {
        constructor(array){
                this.contenedor = array;
                this.randomImg();
                this.changeSource();
        }
        randomImg () {
                for (let i = 0 ; i < this.contenedor.length ; i++){
                        this.contenedor[i].src = arrayImg[  Math.floor(Math.random()*7)  ];
                }
        }
        changeSource (){
                setInterval ( () => {
                        for (let i = 0 ; i < this.contenedor.length ; i++){
                                this.contenedor[i].src = arrayImg[  Math.floor(Math.random()*7)  ];
                        }
                }, 2000 );
        }
}

const squares = new Imgs (imgs);*/


/*carousel*/
document.addEventListener('DOMContentLoaded', () => {
        const elementosCarousel = document.querySelectorAll('.carousel');
        M.Carousel.init(elementosCarousel, {
                duration: 150,
                dist: -100,
                shift: 5,
                padding: 5,
                numVisible : 3,
                indicators:true,
                noWrap : false,
        });
});



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
