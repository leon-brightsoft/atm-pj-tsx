import { SET_ATM } from "../constants/actionTypes";

type State = {
    ATMs: any
}

type Action = {
    type: typeof SET_ATM, payload: any
}

const initialState: State = {
    ATMs: []
}

const atm = (state = initialState, action: Action): any => {
    switch(action.type) {
        case SET_ATM:
            return {
                ...state,
                ATMs: action.payload?.ATMs || state.ATMs
            }
        default: 
            return state
    }
}

export default atm