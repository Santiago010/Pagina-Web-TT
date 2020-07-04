import "./API_FACEBOOK.js";
document.addEventListener("DOMContentLoaded", () => {
  const elementosCarousel = document.querySelectorAll(".carousel");
  M.Carousel.init(elementosCarousel, {
    duration: 150,
    dist: -200,
    shift: 5,
    padding: 5,
    numVisible: 3,
    indicators: true,
    noWrap: false,
  });

  const botones = document.querySelectorAll(".btn-ghost");
  const titulos = document.querySelectorAll(".productos");
  const imagenes = document.querySelectorAll(".img");
  const description = document.getElementById("description");

  const descriptions = [
    "Cunas porta ampolletas y porta frascos, fabricados en materiales PET cristal, o poliestireno blanco, evite que sus ampollas se estropeen en el transporte.",
    "Exhibidores para puntos de venta, manejamos amplia gama de colores, en diferentes materiales y calibres, Exhiba sus productos de forma organizada y aumente sus ventas.",
    "Probadores para puntos de venta e impulsadoras, para promocionar su producto y la calidad, Puede personalizar su marca.",
    "Estuches amplia gama de colores y calibres para empacar su producto terminado y darle mejor presentación y protección.",
    "El empaque blíster es utilizado para exhibir un producto, sin que el contenido sea manipulado por el comprador y mostrando elegancia y posicionamiento de marca.",
    "Diseñamos y fabricamos los moldes en su totalidad, en las instalaciones de nuestra compañía, así mismo podemos  elaborar la muestrafísica, de su proyecto.",
  ];

  const tituloPrincipal = [
    "Cunas",
    "Exhibidores",
    "Probadores",
    "Estuches",
    "Empaques Blister",
    "Moldes",
  ];

  const URL = "../docs/imagenesProducts/";

  const rutas = [
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

  const containerCarousel = document.getElementById("containerUno");
  const containerGaleria = document.getElementById("galeria");

  botones.forEach((elemento, index) =>
    elemento.addEventListener("click", () => {
      containerGaleria.classList.add("ocultar");
      containerCarousel.classList.remove("ocultar");
      description.textContent = descriptions[index];
      titulos.forEach(
        (elemento2) => (elemento2.textContent = tituloPrincipal[index])
      );
      imagenes.forEach((elemento3, index2) =>
        elemento3.setAttribute("src", rutas[index][index2])
      );
    })
  );

  document.getElementById("otros").addEventListener("click", () => {
    containerGaleria.classList.remove("ocultar");
    containerCarousel.classList.add("ocultar");

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
});
