'use script'
import ourPictures from "./gallery-items.js";

const list = document.querySelector(".js-gallery");
const lightBox = document.querySelector('.js-lightbox');
const modalImage = document.querySelector(".lightbox__image");
const closeBtn = document.querySelector('button[data-action="close-lightbox"]');


function galleryImg(ourPictures) {
    const li = document.createElement("li");
    li.classList.add("gallery__item");
    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.src = ourPictures.preview;
    img.srcset = ourPictures.original;
    img.alt = ourPictures.description;
    list.append(li);
    li.append(img);
    return li;
  }
  
  const createGallery = ourPictures.map(drawImg => galleryImg(drawImg));
  list.append(...createGallery);
  list.classList.add("gallery");
  // gallery.append(list);

  console.log(list);

  function handleClick(e)
  {
    lightBox.classList.add('is-open');
    modalImage.src = e.target.srcset;
  }

  function closeModal(e)
  {
    lightBox.classList.remove('is-open');
  }

  function backdropClick (event)
  {
    if (event.target !== event.currentTarget)
    {
      return
    }
    closeModal();
  }


  function escapeExit(event)
  {
    if (event.code !=='Escape')
    {
      return
    }
    closeModal();
  }


  closeBtn.addEventListener("click", closeModal)
  list.addEventListener("click", handleClick)
  window.addEventListener("keydown", escapeExit)
  
  modalImage.addEventListener("click", backdropClick);