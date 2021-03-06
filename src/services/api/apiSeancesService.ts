import axios from "axios";

const baseUrl = process.env.VUE_APP_BASE_URL;
const endPoint = "/seances";

const getSeancesList = async () => {
  try {
    const response = await axios.get(baseUrl + endPoint);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default {
  getSeancesList,
};
