
import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const input = form.querySelector('input[name="search-text"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const query = input.value.trim();
  if (!query) {
    iziToast.warning({
      title: "Warning",
      message: "Please enter a search query",
    });
    return;
  }

  showLoader();
  clearGallery();

  getImagesByQuery(query)
    .then((data) => {
      if (!data || !Array.isArray(data.hits) || data.hits.length === 0) {
        iziToast.info({
          title: "No results",
          message:
            "Sorry, there are no images matching your search query. Please try again!",
        });
        return;
      }

      createGallery(data.hits);

      iziToast.success({
        title: "Success",
        message: `Found ${data.hits.length} images for "${query}"`,
      });
    })
    .catch((error) => {
      iziToast.error({
        title: "Error",
        message:
          "Something went wrong while fetching images. Please try again later.",
      });
    })
    .finally(() => {
      hideLoader();
    });
});
