import { SET_ATM } from "../constants/actionTypes";
import { getAtmApi, addAtmApi, delAtmApi } from "../services/atm.service";
import toast from "react-hot-toast";

export const getATMs = () => {
    return async (dispatch: any) => {
        try {
            const res = await getAtmApi();
            if (res.data) {
                dispatch({
                    type: SET_ATM,
                    payload: { ATMs: res.data?.atm }
                })
            }
        } catch (err: any) {
            toast.error(err.message)
        }
    }
}


export const addATM = (name: string) => {
    return async (dispatch: any) => {
        try {
            const res = await addAtmApi(name);
            if (res.data) {
                dispatch({
                    type: SET_ATM,
                    payload: {
                        ATMs: res.data
                    }
                })
            }
            toast.success("Create ATM successfully ")
        } catch (err: any) {
            toast.error(err.message)
        }
    }
}

export const delATM = async (id: string) => {
    try {
        return await delAtmApi(id)
    } catch (err: any) {
        toast.error(err.message)
    }
}