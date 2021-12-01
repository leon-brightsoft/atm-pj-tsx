import { SET_AUTH } from "../constants/actionTypes";

type State = {
    authLoading: boolean,
    user: object | null,
    isAuthenticated: boolean,
    token: string
}

type Action = {
    type: typeof SET_AUTH, payload: any
}

const initialState: State = {
    authLoading: false,
    user: null,
    isAuthenticated: false,
    token: "",
};

const auth = (state = initialState, action: Action): any => {
    switch(action.type) {
        case SET_AUTH:
            return {
                ...state,
                authLoading: false,
                user: action.payload?.user,
                isAuthenticated: action.payload?.isAuthenticated,
                token: action.payload?.token
            }
        
        default: 
            return state
    }
}

export default auth;