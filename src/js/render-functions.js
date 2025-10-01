
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
const loaderEl = document.querySelector(".loader");
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

export function createGallery(images) {
  if (!Array.isArray(images) || images.length === 0) return;

  const markup = images
    .map((img) => {
      const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = img;
      return `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <div class="thumb">
              <img loading="lazy" src="${webformatURL}" alt="${tags}" />
            </div>
            <div class="info">
              <p><b>Likes</b>: ${likes}</p>
              <p><b>Views</b>: ${views}</p>
              <p><b>Comments</b>: ${comments}</p>
              <p><b>Downloads</b>: ${downloads}</p>
            </div>
          </a>
        </li>`;
    })
    .join("");

  galleryContainer.insertAdjacentHTML("beforeend", markup);

  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = "";
}

export function showLoader() {
  if (!loaderEl) return;
  loaderEl.classList.add("is-active");
}

export function hideLoader() {
  if (!loaderEl) return;
  loaderEl.classList.remove("is-active");
}
