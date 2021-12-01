import { combineReducers } from "redux";
import {LOGOUT} from "../constants/actionTypes";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth.reducer";
import atm from "./atm.reducer";
import queue from "./queue.reducer"

type Config = {
    key: string,
    storage: typeof storage,
    whitelist: any,
    debug: boolean
}

const authPersistConfig: Config = {
    key: "auth",
    storage: storage,
    whitelist: ["authLoading", "user", "isAuthenticated"],
    debug: false,
}

const appReducer = combineReducers({
    auth: persistReducer(authPersistConfig, auth), atm, queue
})

const rootReducers = (state: any, action: any) => {
    if(action.type === LOGOUT){
        return appReducer(undefined, action);
    }
    return appReducer(state, action)
}

export default rootReducers