import { USER_PRODUCTS, LOAD_PROD_FORM, PROD_REMOVED } from "../../consts/product";


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
        case PROD_REMOVED:
            return {
                ...state,
                userProducts: state.userProducts.filter(p => p.id !== action.payload)
            }
        default:
            return state;
    }
}