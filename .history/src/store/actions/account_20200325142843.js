import { LOG_ON_SUCCESS, LOG_ON_ERROR } from "../../consts/account";


export const loadSuccessAction = user => ({ type: LOG_ON_SUCCESS, payload: user})
export const loadErrorAction = msg => ({ type: LOG_ON_ERROR, payload: msg })