import { LOG_ON_SUCCESS } from "../../consts/account";

const initialState = {
    user: false,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case LOG_ON_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}