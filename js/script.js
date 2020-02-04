"use script";
import ourPictures from "./gallery-items.js";
// console.log(ourPictures[0].preview);

const list = document.querySelector(".js-gallery");
const lightBox = document.querySelector(".js-lightbox");
const modalImage = document.querySelector(".lightbox__image");
const closeBtn = document.querySelector('button[data-action="close-lightbox"]');
const content = document.querySelector(".lightbox__content");

function createImg(el) {
  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = el.preview;
  img.dataset.source = el.original;
  img.alt = el.description;
  return img;
}
function createLink(obj) {
  const a = document.createElement("a");
  a.classList.add("gallery__link");
  a.href = ourPictures.original;
  a.append(createImg(obj));
  return a;
}
function createLi(obj) {
  const li = document.createElement("li");
  li.classList.add("gallery__item");
  li.append(createLink(obj));
  return li;
}

const createGallery = ourPictures.map(drawImg => createLi(drawImg));
list.append(...createGallery);

function openModal(e) {
  e.preventDefault();
  lightBox.classList.add("is-open");
  modalImage.src = e.target.dataset.source;
}

function closeModal(e) {
  lightBox.classList.remove("is-open");
  modalImage.src = "";
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
