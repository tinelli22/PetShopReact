import { LOG_ON_SUCCESS, UPDATED_ACCOUNT } from "../../consts/account";
import { initialize } from "redux-form";


export const logOnSuccessAction = user => ({ type: LOG_ON_SUCCESS, payload: user })
export const loadAccountForm = values => initialize("edit", values)
export const updatedUserAction = user => ({ type: UPDATED_ACCOUNT, payload: user })