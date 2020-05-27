import './API_FACEBOOK.js';

const imgOne = document.getElementById('mini_one');


const  arrayImg = [
        '../docs/imagenesIndex/image1.jpeg',
        '../docs/imagenesIndex/image2.jpeg',
        '../docs/imagenesIndex/image3.jpeg',
        '../docs/imagenesIndex/image4.jpeg',
        '../docs/imagenesIndex/image5.jpeg'
]

class Imagen {
        constructor(name){
                this.name = name;
                this.randomImg();
                this.changeSource = this.changeSource.bind(this);
                this.name.addEventListener('load', this.changeSource);
        }
        randomImg () {
                this.name.src = arrayImg[  Math.floor(Math.random()*5)  ];
        }
        changeSource (){
                setTimeout ( () =>
                { this.name.src = arrayImg[  Math.floor(Math.random()*5)  ] }, 3000 );
        }
}
const squareOne   = new Imagen (imgOne);






