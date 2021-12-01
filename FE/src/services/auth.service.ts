import axios from "axios";
import User from "../interfaces/user.interface";

const BASE_URL = "http://localhost:5000/api/v1/auth/";

export const registerAPI = async (data: User) => {
    return await axios.post(BASE_URL + "register", data);
};

export const loginAPI = async (data: User) => {
    return await axios.post(BASE_URL + "login", data);
};

export const authAPI = async () => {
    return await axios.post(BASE_URL);
};
