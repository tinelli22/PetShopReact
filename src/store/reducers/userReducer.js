import { LOG_ON_SUCCESS, UPDATED_ACCOUNT } from "../../consts/account";

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
        case UPDATED_ACCOUNT:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}