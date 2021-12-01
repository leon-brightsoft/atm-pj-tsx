import axios from "axios";


export const accessToken = (token: string) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        localStorage.setItem("@localStorage/token", token)
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}