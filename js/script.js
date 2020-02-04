"use script";
import ourPictures from "./gallery-items.js";

const list = document.querySelector(".js-gallery");
const lightBox = document.querySelector(".js-lightbox");
const modalImage = document.querySelector(".lightbox__image");
const closeBtn = document.querySelector('button[data-action="close-lightbox"]');
const content = document.querySelector(".lightbox__content");

function galleryImg(ourPictures) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const img = document.createElement("img");
  li.classList.add("gallery__item");
  a.classList.add("gallery__link");
  a.href = ourPictures.original;
  img.classList.add("gallery__image");
  img.src = ourPictures.preview;
  img.dataset.source = ourPictures.original;
  img.alt = ourPictures.description;
  list.append(li);
  li.append(a);
  a.append(img);
  return li;
}

const createGallery = ourPictures.map(drawImg => galleryImg(drawImg));
list.append(...createGallery);

console.log(list);
//

function openModal(e) {
  e.preventDefault();
  lightBox.classList.add("is-open");
  modalImage.src = e.target.dataset.source;
}

function closeModal(e) {
  lightBox.classList.remove("is-open");
}

function backdropClick(event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closeModal();
}

function escapeExit(event) {
  if (event.code === "Escape") {
    closeModal();
  }
}

list.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("keydown", escapeExit);
content.addEventListener("click", backdropClick);
