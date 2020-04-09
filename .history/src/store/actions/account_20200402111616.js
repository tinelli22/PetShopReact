import { LOG_ON_SUCCESS } from "../../consts/account";
import { initialize } from "redux-form";


export const logOnSuccessAction = user => ({ type: LOG_ON_SUCCESS, payload: user})
export const loadAccountForm = values => initialize("edit", values)