import { galleryItems } from "./gallery-items.js";
// Change code below this line
let gallery__list = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  let list__element = document.createElement("li");
  list__element.classList.add("gallery__item");
  list__element.innerHTML = `<a class="gallery__link" href="${item.original}">
             <img
               class="gallery__image"
              src="${item.preview}"
              data-source="${item.original}"
               alt="${item.description}"
            />
           </a>`;
  gallery__list.appendChild(list__element);
});

let zdjecia = document.querySelectorAll(".gallery li");
for (const zdjecie of zdjecia) {
  zdjecie.addEventListener("click", (event) => {
    event.preventDefault();
    const instance = window.basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

    instance.show();
  });
}
