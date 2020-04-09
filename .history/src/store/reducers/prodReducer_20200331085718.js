import { SAVE_PROD_SUCCESS, USER_PRODUCTS } from "../../consts/product";


const initialState = {
    product: false,
    userProducts: [],
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SAVE_PROD_SUCCESS:
            return {
                ...state,
                userProducts: state.userProducts.concat(action.payload) 
            }
        case USER_PRODUCTS:
            return {
                ...state,
                userProducts: [action.payload]
            }
        default:
            return state;
    }
}