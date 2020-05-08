const imgOne   = document.getElementById('mini_one');
const imgTwo   = document.getElementById('mini_two');
const imgThree = document.getElementById('mini_three');
const imgFour  = document.getElementById('mini_four');
const imgFive  = document.getElementById('mini_five');

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
const squareTwo   = new Imagen (imgTwo);
const squareThree = new Imagen (imgThree);
const squareFour  = new Imagen (imgFour);
const squareFive  = new Imagen (imgFive);



