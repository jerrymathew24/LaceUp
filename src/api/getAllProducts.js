import axios from "axios";

const BASE_URL = "https://api.escuelajs.co/api/v1";

export const getAllProducts = async () => {
  try {
    const url = `${BASE_URL}/products`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return error;
  }
};