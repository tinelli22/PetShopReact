import { SAVE_PROD_SUCCESS, USER_PRODUCTS, UPDATE_PROD_SUCCESS, LOAD_PROD_FORM, 
} from '../../consts/product'
import { initialize } from 'redux-form'

export const saveProdSuccessAction = prod => ({ type: SAVE_PROD_SUCCESS, payload: prod })
export const updateProdSuccessAction = prod => ({ type: UPDATE_PROD_SUCCESS, payload: prod })
export const loadFormProdAction = values => initialize('product', values)
export const loadProdFormAction = prod => ({ type: LOAD_PROD_FORM, payload: prod })
export const userProductsAction = prods => ({ type: USER_PRODUCTS, payload: prods })