const imgOne   = document.getElementById('mini_one');
const imgTwo   = document.getElementById('mini_two');
const imgThree = document.getElementById('mini_three');
const imgFour  = document.getElementById('mini_four');

const arrayImg = ['../img-banner/uno.jpg'   ,
                  '../img-banner/dos.jpg'   ,
                  '../img-banner/tres.jpg'  ,
                  '../img-banner/cuatro.jpg',
                  '../img-banner/cinco.jpg' ,
                  '../img-banner/seis.jpg'  , 
                  '../img-banner/siete.jpg'  ];

class Imagen {
        constructor(name){
                this.name = name;
                this.RandomImg();
        }
        RandomImg () {
                this.name.src = arrayImg[  Math.floor(Math.random()*7)  ];
                console.log(`Esta es la primera dirreción ${this.name.src}`)
        }
}
function evento (){
        setInterval ( () =>
        {this.name.src = arrayImg[  Math.floor(Math.random()*7)  ]
         console.log(`Esta es la segunda dirección ${this.name.src}`);}, 3000 )
}
let squareOne   = new Imagen (imgOne);
imgOne.addEventListener('load', evento.call(squareOne));
let squareTwo   = new Imagen (imgTwo);
imgTwo.addEventListener('load', evento.call(squareTwo));
let squareThree = new Imagen (imgThree);
imgThree.addEventListener('load', evento.call(squareThree));
let squareFour  = new Imagen (imgFour);
imgFour.addEventListener('load', evento.call(squareFour));


