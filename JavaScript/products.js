
const img1   = document.getElementById('mini1');
const img2   = document.getElementById('mini2');
const img3 = document.getElementById('mini3');
const img4  = document.getElementById('mini4');
const img5  = document.getElementById('mini5');
const img6   = document.getElementById('mini6');
const img7 = document.getElementById('mini7');
const img8 = document.getElementById('mini8');
const img9 = document.getElementById('mini9');
const img10 = document.getElementById('mini10');
const img11 = document.getElementById('mini11');
const img12  = document.getElementById('mini12');
const img13   = document.getElementById('mini13');
const img14 = document.getElementById('mini14');
const img15  = document.getElementById('mini15');
const img16  = document.getElementById('mini16');
const img17   = document.getElementById('mini17');
const img18 = document.getElementById('mini18');


const arrayImg = ['../docs/image1.jpeg',
                  '../docs/image2.jpeg',
                  '../docs/image3.jpeg',
                  '../docs/image4.jpeg',
                  '../docs/image5.jpeg',
                  '../docs/image6.jpeg', 
                  '../docs/image7.jpeg'];

class Imagen {
        constructor(name){
                this.name = name;
                this.randomImg();
                this.changeSource = this.changeSource.bind(this);
                this.name.addEventListener('load', this.changeSource);
        }
        randomImg () {
                this.name.src = arrayImg[  Math.floor(Math.random()*7)  ];
        }
        changeSource (){
                setTimeout ( () =>
                { this.name.src = arrayImg[  Math.floor(Math.random()*7)  ] }, 2000 );
        }
}

const square1   = new Imagen (img1);
const square2   = new Imagen (img2);
const square3 = new Imagen (img3);
const square4   = new Imagen (img4);
const square5   = new Imagen (img5);
const square6 = new Imagen (img6);
const square7   = new Imagen (img7);
const square8   = new Imagen (img8);
const square9 = new Imagen (img9);
const square10   = new Imagen (img10);
const square11  = new Imagen (img11);
const square12 = new Imagen (img12);
const square13  = new Imagen (img13);
const square14  = new Imagen (img14);
const square15 = new Imagen (img15);
const square16   = new Imagen (img16);
const square17   = new Imagen (img17);
const square18 = new Imagen (img18);



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
