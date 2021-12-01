import { applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";
import rootReducer from "../reducers/index";

const storage = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export const persistor = persistStore(storage);
export default storage;