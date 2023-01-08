import { galleryItems } from "./gallery-items.js";
// Change code below this line

// const gallery = document.getElementsByClassName("gallery");
const gallery = document.querySelector(".gallery");
const imgMarkup = createGalleryItem(galleryItems);

function createGalleryItem(items) {
  return items.reduce(
    (acc, item) =>
      (acc += `<div class="gallery__item">
      <a class="gallery__link" rel="noopener noreferrer">
      <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
      </a>
      </div>
      `),
    ""
  );
}

gallery.insertAdjacentHTML("beforeend", imgMarkup);

gallery.addEventListener("click", enlargeImage);

function enlargeImage(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" alt= "${event.target.dataset.description}">
  `);
  instance.show();

  document.onkeydown = function (evt) {
    evt = evt || window.event;

    var isEscape = false;
    if ("key" in evt) {
      isEscape = evt.key === "Escape" || evt.key === "Esc";
    } else {
      isEscape = evt === 27;
    }
    if (isEscape) {
      instance.close();
    }
  };
}
