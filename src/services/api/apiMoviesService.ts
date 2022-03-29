import axios from "axios";

const baseUrl: string = process.env.VUE_APP_BASE_URL;
const endPoint: string = "/movies";

const getMovieList = async () => {
  try {
    const response = await axios.get(baseUrl + endPoint);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default {
  getMovieList,
};
