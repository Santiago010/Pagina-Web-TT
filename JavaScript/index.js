import "./API_FACEBOOK.js";

const imgOne = document.getElementById("mini_one");

const arrayImg = [
  "../docs/ImagesIndex/imgB1.jpg",
  "../docs/ImagesIndex/imgB2.jpg",
  "../docs/ImagesIndex/imgB3.jpg",
  "../docs/ImagesIndex/imgB4.jpg",
];

class Imagen {
  constructor() {
    this.name = imgOne;
    this.randomImg();
    this.changeSource = this.changeSource.bind(this);
    this.name.addEventListener("load", this.changeSource);
  }
  randomImg() {
    this.name.src = arrayImg[Math.floor(Math.random() * 4)];
  }
  changeSource() {
    setTimeout(() => {
      this.name.src = arrayImg[Math.floor(Math.random() * 4)];
    }, 2000);
  }
}
const squareOne = new Imagen();

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('../sw.js')
    .then(ev => console.log(ev))
    .catch(error => {
      console.log(error.message)
    })
}