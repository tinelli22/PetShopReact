import React from 'react'
import { reduxForm } from 'redux-form'


function Store({ }) {

}

Store = reduxForm({ form: 'store', })(Store)

export default Store