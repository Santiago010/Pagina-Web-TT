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
    "Producto cunas porta ampolletas, frascos, se utilizan materiales PET cristal o Poliestireno, se manejan calibres 15 y 18.",
    "En estas imágenes se puede observar unas pequeñas muestras del trabajo que realizamos con exhibidores",
    "En estas imágenes se puede observar unas pequeñas muestras del trabajo que realizamos con probadores",
    "En estas imágenes se puede observar unas pequeñas muestras del trabajo que realizamos con estuches",
    "En estas imágenes se puede observar unas pequeñas muestras del trabajo que realizamos con empaques blister",
    "En estas imágenes se puede observar unas pequeñas muestras del trabajo que realizamos con moldes",
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
          console.log(`elementos cargados ${entries}`);
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
