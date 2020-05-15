// CAROUSEL
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
