'use script'
import ourPictures from "./gallery-items.js";

const list = document.querySelector(".js-gallery");
const lightBox = document.querySelector('.js-lightbox');
const modalImage = document.querySelector(".lightbox__image");
const closeBtn = document.querySelector('button[data-action="close-lightbox"]');
const backDrop = document.querySelector(".lightbox__overlay");
const content = document.querySelector(".lightbox__content");


function galleryImg(ourPictures) {
    const li = document.createElement("li");
    li.classList.add("gallery__item");
    const a = document.createElement("a");
    a.classList.add("gallery__link");
    // a.href = ourPictures.original;
    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.src = ourPictures.preview;
    img.srcset = ourPictures.original;
    img.alt = ourPictures.description;
    list.append(li);
    li.append(a);
    a.append(img);
    return li;
  }
  
   const createGallery = ourPictures.map(drawImg => galleryImg(drawImg));
  list.append(...createGallery);


  console.log(list);

  function openModal(e)
  {
    lightBox.classList.add('is-open');
    modalImage.src = e.target.srcset;
    console.log(modalImage.src);
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
  list.addEventListener("click", openModal)
  window.addEventListener("keydown", escapeExit)
  content.addEventListener("click", backdropClick);