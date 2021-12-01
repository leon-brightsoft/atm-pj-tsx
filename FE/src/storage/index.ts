import { applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/index";

const storage = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default storage;