import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import userReducer from './userReducer'
import prodReducer from './prodReducer'

export default combineReducers({

    prod: prodReducer,
    user: userReducer,
    form: formReducer,
})