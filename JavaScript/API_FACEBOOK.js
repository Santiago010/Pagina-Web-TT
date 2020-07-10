let band = 0;
const chat = document.getElementById("chat");
const buttonFb = document.getElementById("buttonFb");
buttonFb.addEventListener("click", mostrarOcultar);

function mostrarOcultar() {
  if (band === 0) {
    chat.classList.add("mostrarOcultar");
    band = 1;
  } else {
    chat.classList.remove("mostrarOcultar");
    band = 0;
  }
}
