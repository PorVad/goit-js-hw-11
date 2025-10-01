
import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "52565301-d9213fb435e2a20dcf29b0aa1";

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: 40,
  };

  return axios
    .get(BASE_URL, { params })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}
