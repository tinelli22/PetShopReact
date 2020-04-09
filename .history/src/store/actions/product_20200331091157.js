import { SAVE_PROD_SUCCESS, USER_PRODUCTS, UPDATE_PROD_SUCCESS, 
} from '../../consts/product'
import { initialize } from 'redux-form'

export const saveProdSuccessAction = prod => ({ type: SAVE_PROD_SUCCESS, payload: prod })
export const updateProdSuccessAction = prod => ({ type: UPDATE_PROD_SUCCESS, payload: prod })
export const loadFormProdAction = values => initialize('product', values)
export const userProductsAction = prods => ({ type: USER_PRODUCTS, payload: prods })