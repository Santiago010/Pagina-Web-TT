const imgOne   = document.getElementById('mini_one');
const imgTwo   = document.getElementById('mini_two');
const imgThree = document.getElementById('mini_three');
const imgFour  = document.getElementById('mini_four');
const imgFive = document.getElementById('mini_five');

const arrayImg = ['../img-banner/image1.jpeg',
                  '../img-banner/image2.jpeg',
                  '../img-banner/image3.jpeg',
                  '../img-banner/image4.jpeg',
                  '../img-banner/image5.jpeg',
                  '../img-banner/image6.jpeg', 
                  '../img-banner/image7.jpeg'];

class Imagen {
        constructor(name){
                this.name = name;
                this.RandomImg();
        }
        RandomImg () {
                this.name.src = arrayImg[  Math.floor(Math.random()*7)  ];
                //parce deberias quitar esos console.log porque va a saturar la pagina
                console.log(`Esta es la primera dirreción ${this.name.src}`);
        }
}
function evento (){
        setInterval ( () =>
        {this.name.src = arrayImg[  Math.floor(Math.random()*7)  ];
                //parce deberias quitar esos console.log porque va a saturar la pagina
         console.log(`Esta es la segunda dirección ${this.name.src}`);}, 3000 );
}
let squareOne   = new Imagen (imgOne);
imgOne.addEventListener('load', evento.call(squareOne));
let squareTwo   = new Imagen (imgTwo);
imgTwo.addEventListener('load', evento.call(squareTwo));
let squareThree = new Imagen (imgThree);
imgThree.addEventListener('load', evento.call(squareThree));
let squareFour  = new Imagen (imgFour);
imgFour.addEventListener('load', evento.call(squareFour));
let squareFive = new Imagen (imgFive);
imgFive.addEventListener('load', evento.call(squareFive));

