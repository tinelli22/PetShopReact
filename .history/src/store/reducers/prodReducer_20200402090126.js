import { USER_PRODUCTS, LOAD_PROD_FORM } from "../../consts/product";


const initialState = {
    product: false,
    userProducts: [],
}

export default function(state = initialState, action) {
    switch (action.type) {
        case USER_PRODUCTS:
            return {
                ...state,
                userProducts: action.payload
            }
        case LOAD_PROD_FORM:
            return {
                ...state,
                product: action.payload
            }
        default:
            return state;
    }
}