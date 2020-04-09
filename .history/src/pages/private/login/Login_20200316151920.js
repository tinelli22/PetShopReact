import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Field, reduxForm } from 'redux-form'
import InputDefault from '../../../inputs/InputDefault'

function Login({ }) {

    return(
        <div className={"pageLogin"}>
            <Grid container spacing={3} >
                <Grid item>
                    <Field label={"email"} name={"email"} component={InputDefault} />         
                </Grid>
            </Grid>

        </div>
    )
}

Login = reduxForm({ form: "login"})(Login)

export default Login