const imgUno    = document.getElementById('mini-uno');
const imgDos    = document.getElementById('mini-dos');
const imgTres   = document.getElementById('mini-tres');
const imgCuatro = document.getElementById('mini-cuatro');

let arrayImg = ['../img-banner/uno.jpg'   ,
                '../img-banner/dos.jpg'   ,
                '../img-banner/tres.jpg'  ,
                '../img-banner/cuatro.jpg',
                '../img-banner/cinco.jpg' ,
                '../img-banner/seis.jpg'  , 
                '../img-banner/siete.jpg' ];
function asignarRandomImg () {
        imgUno.src    = arrayImg[Math.floor(Math.random()*7)]
        imgDos.src    = arrayImg[Math.floor(Math.random()*7)]
        imgTres.src   = arrayImg[Math.floor(Math.random()*7)]
        imgCuatro.src = arrayImg[Math.floor(Math.random()*7)]
}
setInterval( asignarRandomImg, 4000 )

