
import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const input = form.querySelector('input[name="search-text"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const query = input.value.trim();

  if (query === "") {
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
          message: "Sorry, there are no images matching your search query. Please try again!",
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
      console.error("Fetch error:", error);
      iziToast.error({
        title: "Error",
        message: "Something went wrong while fetching images. Please try again later.",
      });
    })
    .finally(() => {
      hideLoader();
    });
});
