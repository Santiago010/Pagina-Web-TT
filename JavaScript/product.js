import "./API_FACEBOOK.js"

const containerCarrousel = document.getElementById('containerUno')

const containerGaleria = document.getElementById('galeria')

const description = document.getElementById('description')

const tittle = document.getElementById('titleProductos')

const viewImgs = document.querySelector('.contenedorCarrousel')

const descriptions = [
  ["Cunas porta ampolletas y porta frascos, fabricados en materiales PET cristal, o poliestireno blanco, evite que sus ampollas se estropeen en el transporte."],
  ["Exhibidores para puntos de venta, manejamos amplia gama de colores, en diferentes materiales y calibres, Exhiba sus productos de forma organizada y aumente sus ventas."],
  ["Probadores para puntos de venta e impulsadoras, para promocionar su producto y la calidad, Puede personalizar su marca."],
  ["Estuches amplia gama de colores y calibres para empacar su producto terminado y darle mejor presentación y protección."],
  ["El empaque blíster es utilizado para exhibir un producto, sin que el contenido sea manipulado por el comprador y mostrando elegancia y posicionamiento de marca."],
  ["Diseñamos y fabricamos los moldes en su totalidad, en las instalaciones de nuestra compañía, así mismo podemos  elaborar la muestrafísica, de su proyecto."],
  ];

  const tittles = [
    ["Cunas"],
    ["Exhibidores"],
    ["Probadores"],
    ["Estuches"],
    ["Empaques Blister"],
    ["Moldes"],
  ];

  const URL = "../docs/imagenesProducts/";

  const imgsBanner = [
    [`${URL}cunas/img1C.JPG`, `${URL}cunas/img2C.JPG`, `${URL}cunas/img3C.JPG`],

    [
      `${URL}exhibidores/img1EX.JPG`,
      `${URL}exhibidores/img2EX.JPG`,
      `${URL}exhibidores/img3EX.JPG`,
    ],

    [
      `${URL}probadores/img1P.JPG`, 
      `${URL}probadores/img2P.JPG`,
      `${URL}probadores/img3P.JPG`,
    ],

    [
      `${URL}estuches/img1E.JPG`,
      `${URL}estuches/img2E.JPG`,
      `${URL}estuches/img3E.JPG`,
    ],

    [
      `${URL}empaquesBlister/img1B.JPG`,
      `${URL}empaquesBlister/img2B.JPG`,
      `${URL}empaquesBlister/img3B.JPG`,
    ],

    [
      `${URL}moldes/img1M.JPG`,
      `${URL}moldes/img2M.JPG`,
      `${URL}moldes/img3M.JPG`,
    ],
  ];

  let contador = 0

function Carrousel(contenedor, arrayImg){
    contenedor.addEventListener('click', event => {
        let BtnAtras = contenedor.querySelector('.BtnAtras')
        let BtnAdelante  = contenedor.querySelector('.BtnAdelante')
        let img = contenedor.querySelector('.imagenB')
        let target = event.target



        if(target === BtnAtras){
          if(contador > 0){
            img.src = arrayImg[contador - 1]
            contador--
          }else{
            img.src = arrayImg[arrayImg.length - 1]
            contador = arrayImg.length - 1
          }
        }else if(target === BtnAdelante){
          if(contador > arrayImg.length - 1){
            img.src = arrayImg[contador + 1]
            contador++
          }else{
            img.src = arrayImg[0]
            contador = 0
          }
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
  Carrousel(viewImgs, imgsBanner[0])
})


function q (CI){
  CI.addEventListener('click', event => {
    let btnCu = CI.querySelector('.btnCu')
    let btnEX = CI.querySelector('.btnEX')
    let btnPr = CI.querySelector('.btnPr')
    let btnEs = CI.querySelector('.btnEs')
    let btnEm = CI.querySelector('.btnEm')
    let btnMo = CI.querySelector('.btnMo')
    let btnGa = CI.querySelector('.btnGa')
    let t = event.target

    containerGaleria.classList.add("ocultar");
    containerCarrousel.classList.remove("ocultar");

    if(t === btnCu){
      containerCarrousel.classList.add('contenedorPrincipal')
      Carrousel(viewImgs, imgsBanner[0])
      tittle.textContent = tittles[0]
      description.textContent = descriptions[0]
      console.log('cunas')
    }

    if(t === btnEX){
      containerCarrousel.classList.add('contenedorPrincipal')
      Carrousel(viewImgs, imgsBanner[1])
      tittle.textContent = tittles[1]
      description.textContent = descriptions[1]
      console.log('exhibidores')
    }

    if(t === btnPr){
      containerCarrousel.classList.add('contenedorPrincipal')
      Carrousel(viewImgs, imgsBanner[2])
      tittle.textContent = tittles[2]
      description.textContent = descriptions[2]
      console.log('Probadores')
    }

    if(t === btnEs){
      containerCarrousel.classList.add('contenedorPrincipal')
      Carrousel(viewImgs, imgsBanner[3])
      tittle.textContent = tittles[3]
      description.textContent = descriptions[3]
      console.log('Estuches')
    }

    if(t === btnEm){
      containerCarrousel.classList.add('contenedorPrincipal')
      Carrousel(viewImgs, imgsBanner[4])
      tittle.textContent = tittles[4]
      description.textContent = descriptions[4]
      console.log('Empaques Blister')
    }

    if(t === btnMo){
      containerCarrousel.classList.add('contenedorPrincipal')
      Carrousel(viewImgs, imgsBanner[5])
      tittle.textContent = tittles[5]
      description.textContent = descriptions[5]
      console.log('Moldes')
    }

    if(t === btnGa){
      containerCarrousel.classList.remove('contenedorPrincipal')
      containerCarrousel.classList.add('ocultar')

      containerGaleria.classList.remove('ocultar')
      

      const IB_Img = document.querySelectorAll("#wrapper > #IO_Img > img");

      const lazyImg = (entries, observer) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry) => {
            const img = entry.target;
            const src = img.getAttribute("data-lazy");
  
            img.setAttribute("src", src);
            observer.disconnect();
          });
      };
  
      IB_Img.forEach((img) => {
        const observer = new IntersectionObserver(lazyImg, {
          threshold: 0.5,
        });
        observer.observe(img);
      });
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {

  const g = document.querySelector('.btn-container')
  q(g)
})


