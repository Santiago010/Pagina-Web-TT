import "./API_FACEBOOK.js";

const imgOne = document.getElementById("mini_one");

const arrayImg = [
  "../docs/imagenesIndex/imgB (1).jpg",
  "../docs/imagenesIndex/imgB (2).jpg",
  "../docs/imagenesIndex/imgB (3).jpg",
  "../docs/imagenesIndex/imgB (4).jpg",
];

class Imagen {
  constructor(name) {
    this.name = name;
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
const squareOne = new Imagen(imgOne);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../sw.js")
    // .then((event) => console.log(event))
    .catch((Error) => console.log(Error.message));
}
