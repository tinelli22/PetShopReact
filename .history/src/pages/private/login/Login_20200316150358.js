import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Field, reduxForm } from 'redux-form'
import InputDefault from '../../../inputs/InputDefault'

function Login({ }) {

    return(
        <div className={"pageLogin"}>
            <Grid item xs={12} sm={6} >
                <Field label={"email"} name={"email"} component={InputDefault} />         
            </Grid>

            <Grid item xs={12} sm={6} >
                <Field label={"senha"} name={"senha"} component={InputDefault} />         
            </Grid>
        </div>
    )
}

Login = reduxForm({ form: "login"})(Login)

export default Login