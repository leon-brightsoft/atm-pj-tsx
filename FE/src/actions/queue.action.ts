import { SET_PEOPLE } from "../constants/actionTypes";
import { getQueueApi, addQueueApi } from "../services/queue.service";
import toast from "react-hot-toast";
import { Queue } from "../interfaces/atm.interface";

export const addQueue = async (data: Queue) => {
    try {
        const res = await addQueueApi(data);
        if (res.data) {
            toast.success("Add Queue Successfully!")
        }
    } catch (err: any) {
        toast.error(err.message);
    }
}


export const getQueue = () => {
    return async (dispatch: any) => {
        try {
            const res = await getQueueApi();
            if (res.data) {
                dispatch({
                    type: SET_PEOPLE,
                    payload: {
                        queue: res.data?.queue
                    }
                })
            }
        } catch (err: any) {
            toast.error(err.message)
        }
    }

}