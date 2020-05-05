const contenedorUno    = document.getElementById('mini-uno');
const contenedorDos    = document.getElementById('mini-dos');
const contenedorTres   = document.getElementById('mini-tres');
const contenedorCuatro = document.getElementById('mini-cuatro');

let arrayImg = ['../img-banner/uno.jpg', '../img-banner/dos.jpg', '../img-banner/tres.jpg', '../img-banner/cuatro.jpg', '../img-banner/cinco.jpg', '../img-banner/seis.jpg', '../img-banner/siete.jpg'];



setInterval( function randomear () {
    contenedorUno.src = arrayImg[Math.floor(Math.random()*7)]
    contenedorDos.src = arrayImg[Math.floor(Math.random()*7)]
    contenedorTres.src = arrayImg[Math.floor(Math.random()*7)]
    contenedorCuatro.src = arrayImg[Math.floor(Math.random()*7)]
}, 3000 )