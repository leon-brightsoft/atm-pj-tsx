import axios from "axios";
import { Queue } from "../interfaces/atm.interface";

const BASE_URL = "http://localhost:5000/api/v1/atms/";

export const addQueueApi = async (data: Queue) => {
    return await axios.post(BASE_URL + "people", data);
}

export const getQueueApi = async () => {
    return await axios.get(BASE_URL);
}