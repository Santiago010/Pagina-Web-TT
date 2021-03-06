import "./API_FACEBOOK.js";

const BtnsP = document.querySelectorAll(".btn-ghost");
const BtnsD = document.querySelectorAll(".btn-ghost-desplegable");
const containerCarrousel = document.getElementById("containerUno");
const containerGaleria = document.getElementById("galeria");
const description = document.getElementById("description");
const tittle = document.querySelector("#titleProductos");
const imgCarrousel = document.querySelectorAll(".imgB");

const descriptions = [
  "Cunas porta ampolletas y porta frascos, fabricados en materiales PET cristal o poliestireno blanco, evite que sus ampollas se estropeen en el transporte.",
  "Exhibidores para puntos de venta, manejamos amplia gama de colores, en diferentes materiales y calibres, Exhiba sus productos de forma organizada y aumente sus ventas.",
  "Probadores para puntos de venta e impulsadoras, para promocionar su producto y la calidad, Puede personalizar su marca.",
  "Estuches amplia gama de colores y calibres para empacar su producto terminado y darle mejor presentación y protección.",
  "El Empaque Blíster es utilizado para exhibir un producto, sin que el contenido sea manipulado por el comprador y mostrando elegancia y posicionamiento de marca.",
  "Diseñamos y fabricamos los Moldes en su totalidad, en las instalaciones de nuestra compañía, así mismo podemos  elaborar la muestrafísica, de su proyecto.",
];

const tittles = [
  "Cunas",
  "Exhibidores",
  "Probadores",
  "Estuches",
  "Empaques Blister",
  "Moldes",
];

const arrayImg = [
  [
    '../docs/ImagesProducts/cunas/img1C.JPG',
    '../docs/ImagesProducts/cunas/img2C.JPG',
    '../docs/ImagesProducts/cunas/img3C.JPG',
  ],
  [
    '../docs/ImagesProducts/exhibidores/img1EX.JPG',
    '../docs/ImagesProducts/exhibidores/img2EX.JPG',
    '../docs/ImagesProducts/exhibidores/img3EX.JPG',
  ],
  [
    '../docs/ImagesProducts/probadores/img1P.JPG',
    '../docs/ImagesProducts/probadores/img2P.JPG',
    '../docs/ImagesProducts/probadores/img3P.JPG',
  ],
  [
    '../docs/ImagesProducts/estuches/img1E.JPG',
    '../docs/ImagesProducts/estuches/img2E.JPG',
    '../docs/ImagesProducts/estuches/img3E.JPG',
  ],
  [
    '../docs/ImagesProducts/empaquesBlister/img1B.JPG',
    '../docs/ImagesProducts/empaquesBlister/img2B.JPG',
    '../docs/ImagesProducts/empaquesBlister/img3B.JPG',
  ],
  [
    '../docs/ImagesProducts/moldes/img1M.JPG',
    '../docs/ImagesProducts/moldes/img2M.JPG',
    '../docs/ImagesProducts/moldes/img3M.JPG',
  ],
];

let slider_index = 0;

function show_slider(index) {
  let slider = document.querySelectorAll(".slider");
  let dots = document.querySelectorAll(".dot-nav");

  if (index >= slider.length) {
    slider_index = 0;
  }

  if (index < 0) {
    slider_index = slider.length - 1;
  }
  for (let i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
    dots[i].classList.remove("active-dot");
  }

  slider[slider_index].style.display = "block";
  dots[slider_index].classList.add("active-dot");
}

show_slider(slider_index);

document.querySelector("#arrow-prev").addEventListener("click", () => {
  show_slider(--slider_index);
});

document.querySelector("#arrow-next").addEventListener("click", () => {
  show_slider(++slider_index);
});

BtnsP.forEach((Element, index) => {
  if (index === 6) {
    return;
  }
  Element.addEventListener("click", () => {
    containerCarrousel.classList.add("contenedorPrincipal");
    containerGaleria.classList.add("ocultar");
    containerCarrousel.classList.remove("ocultar");
    description.textContent = descriptions[index];
    tittle.textContent = tittles[index];
    imgCarrousel.forEach((Element2, index2) =>
      Element2.setAttribute("src", arrayImg[index][index2])
    );
  });
});
BtnsD.forEach((Element, index) => {
  if (index === 6) {
    return;
  }
  Element.addEventListener("click", () => {
    containerCarrousel.classList.add("contenedorPrincipal");
    containerGaleria.classList.add("ocultar");
    containerCarrousel.classList.remove("ocultar");
    description.textContent = descriptions[index];
    tittle.textContent = tittles[index];
    imgCarrousel.forEach((Element2, index2) =>
      Element2.setAttribute("src", arrayImg[index][index2])
    );
  });
});
document.getElementById("otros").addEventListener("click", () => {
  containerGaleria.classList.remove("ocultar");

  containerCarrousel.classList.remove("contenedorPrincipal");
  containerCarrousel.classList.add("ocultar");

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
});
document.getElementById("otros-desplegable").addEventListener("click", () => {
  containerGaleria.classList.remove("ocultar");

  containerCarrousel.classList.remove("contenedorPrincipal");
  containerCarrousel.classList.add("ocultar");

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
});
