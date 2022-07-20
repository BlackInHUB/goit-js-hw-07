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
    const galleryModal = basicLightbox.create(
      `
    <img src="${event.target.dataset.source}" width="800" height="600">`,
      {
        onShow: () => {
          window.addEventListener('keydown', onEscClose);
        },
        onClose: () => {
          window.removeEventListener('keydown', onEscClose);
        },
      }
    );

    galleryModal.show();

    function onEscClose(event) {
      console.log(event);
      if (event.code === 'Escape') {
        galleryModal.close();
      }
    }
  }
}
