import { LOAD_ACCOUNT_SUCCESS, LOAD_ACCOUNT_ERROR } from "../../consts/account";


export const loadSuccessAction = user => ({ type: LOAD_ACCOUNT_SUCCESS, payload: user})
export const loadErrorAction = msg => ({ type: LOAD_ACCOUNT_ERROR, payload: msg })