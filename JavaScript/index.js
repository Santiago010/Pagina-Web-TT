import './API_FACEBOOK.js';

const imgOne = document.getElementById('mini_one');

const nameProduct = document.getElementById('name-product');


const  arrayImg = [
        '../docs/imagenesIndex/image1.jpeg',
        '../docs/imagenesIndex/image2.jpeg',
        '../docs/imagenesIndex/image3.jpeg',
        '../docs/imagenesIndex/image4.jpeg',
        '../docs/imagenesIndex/image5.jpeg'
]

const nombreProducts = [
        'product1',
        'product2',
        'product3',
        'product4',
        'product5'
]

class Imagen {
        constructor(name,name2){
                this.name = name;
                this.name2 = name2
                this.randomImg();
                this.changeSource = this.changeSource.bind(this);
                this.name.addEventListener('load', this.changeSource);
                this.name2.addEventListener('load', this.changeSource)
        }
        randomImg () {
                this.name.src = arrayImg[  Math.floor(Math.random()*5)  ];
                this.name2.textContent = nombreProducts [ Math.floor(Math.random()*5) ];
        }
        changeSource (){
                setTimeout ( () =>
                {
                        this.name.src = arrayImg[  Math.floor(Math.random()*5)  ]
                        this.name2.textContent = nombreProducts[Math.floor(Math.random()*5) ]
                        }, 3000 );
        }
}
const squareOne   = new Imagen (imgOne, nameProduct);

//SERVICE WORKER
//VALIDAMOS QUE EL NAVEGADOR EN USO, TENGA SERVICE WORKER
if ( 'serviceWorker' in navigator ) {
        //REGISTRAMOS EL ARCHIVO DE LÓGICA PARA EL SERVICE WORKERS
        navigator.serviceWorker.register( '../sw.js' )
        .catch( error => console.log( error.message ) );
}
 







