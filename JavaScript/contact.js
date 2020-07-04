import "./API_FACEBOOK.js";

const URL_FACEBOOK =
  "https://www.facebook.com/Termoformados-Troquelados-JG-190642551559996/";
const URL_INSTAGRAM = "https://www.instagram.com/termo.formados/?hl=es-la";

const REDES_SOCIALES = [URL_FACEBOOK, URL_INSTAGRAM];

const buttons = document.querySelectorAll(".btn");

buttons.forEach((elemento, index) => {
  elemento.addEventListener("click", () => window.open(REDES_SOCIALES[index]));
});
