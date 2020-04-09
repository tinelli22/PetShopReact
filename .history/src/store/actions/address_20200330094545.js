import { initialize } from "redux-form";

export const loadAddressAction = ({ cep, address }) => initialize('store', { cep, address })