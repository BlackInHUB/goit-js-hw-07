import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const galleryItemsArray = galleryItems
  .map(
    el => `<a class="gallery__item" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>`
  )
  .join('');
console.log(galleryItemsArray);

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsArray);

galleryContainer.addEventListener('click', onSliderOpen);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

function onSliderOpen(event) {
  if (event.target.classList.contains('gallery__item')) {
    lightbox.open();
  }
}
