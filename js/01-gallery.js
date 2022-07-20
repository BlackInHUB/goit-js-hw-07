import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryItemsArray = galleryItems
  .map(
    el => `<div class="gallery__item"><a class="gallery__link" href="${el.original}">
        <img class="gallery__image" data-source="${el.original}" src="${el.preview}" alt="${el.description}"></a></div>`
  )
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsArray);

galleryContainer.addEventListener('click', onImgModal);

function onImgModal(event) {
  event.preventDefault();

  if (event.target.classList.contains('gallery__image')) {
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

    instance.show();

    addEventListener('keydown', escClose);

    function escClose(event) {
      if (event.code === 'Escape') {
        instance.close();
      }
    }
  }
}
