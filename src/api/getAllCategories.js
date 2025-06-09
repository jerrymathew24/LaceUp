import axios from 'axios'

const BASE_URL = "https://api.escuelajs.co/api/v1";

export const getAllCategories = async () => {
    try {
        const url = `${BASE_URL}/categories`;
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        return error
    }
}