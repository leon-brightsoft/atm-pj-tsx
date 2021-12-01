import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/atms/"

export const getAtmApi = async () => {
    return await axios.get(BASE_URL)
}

export const addAtmApi = async (data: string) => {
    return await axios.post(BASE_URL, data)
}

export const delAtmApi = async (id: string) => {
    return await axios.delete(BASE_URL + id)
}