const imgOne = document.getElementById('mini_one');

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
                { this.name.src = arrayImg[  Math.floor(Math.random()*7)  ] }, 3000 );
        }
}
const squareOne   = new Imagen (imgOne);

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



