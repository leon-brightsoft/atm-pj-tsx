import { combineReducers } from "redux";
import {LOGOUT} from "../constants/actionTypes";
import auth from "./auth.reducer";
import atm from "./atm.reducer";
import queue from "./queue.reducer";

const appReducer = combineReducers({
    auth, atm, queue
})

const rootReducers = (state: any, action: any) => {
    if(action.type === LOGOUT){
        return appReducer(undefined, action);
    }
    return appReducer(state, action)
}

export default rootReducers