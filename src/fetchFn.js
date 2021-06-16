import axios from "axios";

const APY_KEY = "21066802-1751d875d52f6494cef1e0048";
const BASE_URL = "https://pixabay.com";

export const searchPics = (searchQuery, currentPage) => {
  return axios
    .get(
      `${BASE_URL}/api/?key=${APY_KEY}&q=${searchQuery}&image_type=photo&per_page=12&page=${currentPage}`
    )
    .then((response) => response.data.hits);
};

// export default { fetchImages }
