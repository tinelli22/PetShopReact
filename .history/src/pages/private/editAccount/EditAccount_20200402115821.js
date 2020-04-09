import React,{ useEffect, useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Grid } from '@material-ui/core'

import Default from '../../../inputs/default'
import Password from '../../../inputs/password'

function EditAccount({ user, onLoadForm, onUpdatedUser, handleSubmit, }) {

    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        user && onLoadForm(user)
    }, [])

    const togglePassword = () => setToggle(!toggle)

    const onSave = values => {
        console.log(values)
    }

    return(
        <Grid container>
        <form onSumit={handleSubmit(onSave)}>
            <Grid item xs={12} sm={6} md={6}>
                <Field name={'name'} label={'Nome'} component={Default} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Field name={'password'} label={'Senha'} show={toggle} onTogglePassword={togglePassword} 
                component={Password} />
            </Grid>
            <Grid item>
                
            </Grid>
        </form>
        </Grid>
    )
}

EditAccount = reduxForm({ form: 'edit'})(EditAccount)

export default EditAccount