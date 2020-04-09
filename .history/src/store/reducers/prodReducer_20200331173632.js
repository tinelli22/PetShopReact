import { USER_PRODUCTS } from "../../consts/product";


const initialState = {
    product: false,
    userProducts: [],
}

export default function(state = initialState, action) {
    switch (action.type) {
        case USER_PRODUCTS:
            return {
                ...state,
                userProducts: [action.payload]
            }
        default:
            return state;
    }
}