// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
const galleryMmarkup = createGallaryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMmarkup);


function  createGallaryMarkup (galleryItems){
return galleryItems.map(({
    preview, original, description}) => {
    return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}).join("");
}
      const lightbox = new SimpleLightbox('.gallery a',
       {docClose: false,
        captionsData: "alt",
        captionDelay: 250,
    });
    