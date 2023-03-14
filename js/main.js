/* MILESTONE 1

Per prima cosa, creiamo il markup statico:
costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2

Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3

Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente. */

/* strumenti usati 
const
let
cicle for
.length
console.log
 */
/********************************************************************************************************************/
/********************************************************************************************************************/
/* creo una costante per le img */
const images = [
  "./assets/img/01.webp",
  "./assets/img/02.webp",
  "./assets/img/03.webp",
  "./assets/img/04.webp",
  "./assets/img/05.webp",
];

// seleziono l'immagine attiva a schermo
let activeImage = 0;

// seleziono immagine dom
const imagesElement = document.querySelector(".slider > .images");

// loop for usato per creare un ciclo di immagini
for (let i = 0; i < images.length; i++) {
  const imgSrc = images[i];
  const imgElement = `<img class="img-fluid ${
    i === activeImage ? "active" : ""
  }" src="${imgSrc}" alt="">`;
  console.log(imgElement);

  //insertAdjacentHTML
  imagesElement.insertAdjacentHTML("beforeend", imgElement);
}

// seleziono tutte le slides
const slideImagesElements = document.querySelectorAll(
  ".slider > .images > img"
);

// aggiungo listen click next
const nextEl = document.querySelector(".next");
nextEl.addEventListener("click", function () {
  console.log("cliccato next");

  // seleziono la slide corrente
  const currentSlide = slideImagesElements[activeImage];
  console.log(currentSlide);

  // rimuovo active class dreom the active image
  currentSlide.classList.remove("active");

  // creo un incremento del valore di "activeimage" variabile
  activeImage++;

  // seleziono la prossima slide
  const nextImage = slideImagesElements[activeImage];

  // attivo la classe " active" sulla prossima img
  console.log(nextImage);
  nextImage.classList.add("active");
});

// aggiungo listen click prev
const prevEl = document.querySelector(".prev");
prevEl.addEventListener("click", function () {
  console.log("cliccato prev");

  // select current slide
  const currentSlide = slideImagesElements[activeImage];
  console.log(currentSlide);

  // remove active class dreom the active image
  currentSlide.classList.remove("active");

  //  creo un decremento del valore di "activeimage" variabile
  activeImage--;

  // seleziono la prossima slide
  const nextImage = slideImagesElements[activeImage];

  // attivo la classe " active" sulla prossima img
  console.log(nextImage);
  nextImage.classList.add("active");
});
