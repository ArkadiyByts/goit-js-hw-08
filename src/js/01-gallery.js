import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

//console.log(galleryItems);

// Create image frame
const smallImg = galleryItems
  .map((image) => `<li>
      <a class="gallery__item" href="${image.original}" data-slb-group="mygroup">
        <img class="gallery__image" src="${image.preview}" 
          data-source="${image.original}"
          alt="${image.description}"></a></li>`)
  .join("");

// Add images to div
const galleryList = document.querySelector(".gallery");
//console.log(galleryList);
galleryList.insertAdjacentHTML('afterbegin', smallImg);

const lightbox = new SimpleLightbox('ul li .gallery__item',{ captionsData: "alt",captionDelay: "250" });