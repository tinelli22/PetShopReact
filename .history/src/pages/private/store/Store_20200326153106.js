import React,{ useState } from 'react'
import { reduxForm } from 'redux-form'


function Store({ growl }) {

    console.log(growl)
    return(
        <>

        </>
    )
}

Store = reduxForm({ form: 'store', })(Store)

export default Store