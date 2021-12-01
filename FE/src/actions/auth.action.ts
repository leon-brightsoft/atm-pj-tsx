import { SET_AUTH, LOGOUT } from "../constants/actionTypes";
import { accessToken } from "../services/token.sevice";
import { loginAPI, registerAPI } from "../services/auth.service";
import toast from "react-hot-toast";
import User from "../interfaces/user.interface";

export const login = (data: User) => {
    return async (dispatch: any) => {
        try {
            const res = await loginAPI(data);
            if (res.data.user) {
                dispatch({
                    type: SET_AUTH,
                    payload: { isAuthenticated: true, user: res.data.user }
                })
                accessToken(res.data.PRIVATE_TOKEN)
                toast.success("Login successfully!")
            } else {
                throw new Error(res.data.message)
            }
        } catch (err: any) {
            toast.error(err.message)
        }
    }
}


export const register = (data: User) => {
    return async (dispatch: any) => {
        try {
            const res = await registerAPI(data);
            if (res.data.user) {
                dispatch({
                    type: SET_AUTH,
                    payload: { isAuthenticated: true, user: res.data.user }
                })
                accessToken(res.data.PRIVATE_TOKEN)
                toast.success("Register successfully")
            } else {
                throw new Error(res.data.message)
            }
        } catch (err: any) {
            toast.error(err.message)
        }
    }
}


export const logout = () => {
    return async (dispatch: any) => {
        localStorage.removeItem("@localStorage/token")
        dispatch({
            type: LOGOUT,
            payload: { isAuthenticated: false, user: null }
        })
    }
}
