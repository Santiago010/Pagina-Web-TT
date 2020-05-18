//var para llamar a los botones
var boton1 = document.getElementById('boton1');
var boton2 = document.getElementById('boton2');
var boton3 = document.getElementById('boton3');
var boton4 = document.getElementById('boton4');
var boton5 = document.getElementById('boton5');
var boton6 = document.getElementById('boton6');
var boton7 = document.getElementById('boton7');

//var para llamar a los elementos del carousel
var descripcionC = document.getElementById('description');
var tituloProductosC = document.getElementById('tituloProducto');
var subtituloProductosC = document.getElementById('subtituloProducto');
var imagen1C = document.getElementById('1imagenC');
var imagen2C = document.getElementById('2imagenC');
var imagen3C = document.getElementById('3imagenC');

boton1.addEventListener("click", function(){
        console.log("se esta ejecutando la funcion del boton cunas");
        descripcionC.textContent = "en estas imagenes se puede observar unas pequeñas muestras del trabajo que realizamos con cunas";
        subtituloProductosC.textContent = "Productos";
        tituloProductosC.textContent = "Cunas";
        imagen1C.src = '../docs/imagenesProducts/cunas/imgC1.jpg';
        imagen2C.src = '../docs/imagenesProducts/cunas/imgC2.jpg';
        imagen3C.src = '../docs/imagenesProducts/cunas/imgC3.jpg';
});


boton2.addEventListener("click", function(){
        console.log("se esta ejecutando la funcion del boton exhibidores");
        descripcionC.textContent = "en estas imagenes se puede observa unas pequeñas muestras del trabajo que realizamos con exhibidores";
        subtituloProductosC.textContent = "Productos";
        tituloProductosC.textContent = "Exhibidores";
        imagen1C.src = '../docs/imagenesProducts/exhibidores/imgE1.jpg';
        imagen2C.src = '../docs/imagenesProducts/exhibidores/imgE1.jpg';
        imagen3C.src = '../docs/imagenesProducts/exhibidores/imgE1.jpg';
});

boton3.addEventListener("click",function(){
        console.log("se esta ejecutando la funcion del boton Probadores");
        descripcionC.textContent = "en estas imagenes se puede observa unas pequeñas muestras del trabajo que realizamos con Probadores";
        subtituloProductosC.textContent = "Productos";
        tituloProductosC.textContent = "Probadores";
        imagen1C.src = '../docs/imagenesProducts/probadores/imgp1.jpg';
        imagen2C.src = '../docs/imagenesProducts/probadores/imgp2.jpg';
        imagen3C.src = '../docs/imagenesProducts/probadores/imgp3.jpg';  
});

boton4.addEventListener("click", function(){
        console.log("se esta ejecutando la funcion del boton Estuches");
        descripcionC.textContent = "en estas imagenes se puede observa unas pequeñas muestras del trabajo que realizamos con Estuches";
        subtituloProductosC.textContent = "Productos";
        tituloProductosC.textContent = "Estuches";
        imagen1C.src = '../docs/imagenesProducts/estuches/imgE1.jpg';
        imagen2C.src = '../docs/imagenesProducts/estuches/imgE2.jpg';
        imagen3C.src = '../docs/imagenesProducts/estuches/imgE1.jpg'; 
});

boton5.addEventListener("click", function(){
        console.log("se esta ejecutando la funcion del boton Empaques Blister");
        descripcionC.textContent = "en estas imagenes se puede observa unas pequeñas muestras del trabajo que realizamos con Empaques Blister";
        subtituloProductosC.textContent = "Productos";
        tituloProductosC.textContent = "Blister";
        imagen1C.src = '../docs/imagenesProducts/empaquesBlister/';
        imagen2C.src = '../docs/imagenesProducts/empaquesBlister/';
        imagen3C.src = '../docs/imagenesProducts/empaquesBlister/';   
});

boton6.addEventListener("click", function(){
        console.log("se esta ejecutando la funcion del boton Liners Acetatos");
        descripcionC.textContent = "en estas imagenes se puede observa unas pequeñas muestras del trabajo que realizamos con Liners Acetatos";
        subtituloProductosC.textContent = "Productos";
        tituloProductosC.textContent = "Liners & Acetatos";
        imagen1C.src = '../docs/imagenesProducts/acetatosLiners/';
        imagen2C.src = '../docs/imagenesProducts/acetatosLiners/';
        imagen3C.src = '../docs/imagenesProducts/acetatosLiners/'; 
});

boton7.addEventListener("click", function(){
        console.log("se esta ejecutando la funcion del boton Moldes");
        descripcionC.textContent = "en estas imagenes se puede observa unas pequeñas muestras del trabajo que realizamos con moldes";
        subtituloProductosC.textContent = "Productos";
        tituloProductosC.textContent = "Moldes";
        imagen1C.src = '../docs/imagenesProducts/moldes/imagen1p.jpg';
        imagen2C.src = '../docs/imagenesProducts/moldes/imagen2p.jpg';
        imagen3C.src = '../docs/imagenesProducts/moldes/imagen1p.jpg';    
});


// CAROUSEL
document.addEventListener('DOMContentLoaded', () => {
        const elementosCarousel = document.querySelectorAll('.carousel');
        M.Carousel.init(elementosCarousel, {
                duration: 150,
                dist: -200,
                shift: 5,
                padding: 5,
                numVisible : 3,
                indicators:true,
                noWrap : false,
        });
});



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

