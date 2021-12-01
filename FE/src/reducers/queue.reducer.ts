import { SET_PEOPLE } from "../constants/actionTypes";

type State = {
    queue: any
}

type Action = {
    type: typeof SET_PEOPLE, payload: any
}

const initialState: State = {
    queue: []
}

const queue = (state = initialState, action: Action): any => {
    switch(action.type) {
        case SET_PEOPLE:
            return {
                ...state,
                queue: action.payload?.queue || state.queue
            }
        default: 
            return state
    }
}

export default queue