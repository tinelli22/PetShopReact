import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Field, reduxForm } from 'redux-form'
import InputDefault from '../../../inputs/InputDefault'
import { AccountBoxRounded } from '@material-ui/icons'

function Login({ }) {

    return(
        <div className={"pageLogin"}>
            <Grid container spacing={10} alignItems={'stretch'} direction={"column"} justify={"flex-start"} >
                <Grid item>
                    <AccountBoxRounded />
                </Grid>
                <Field label={"email"} name={"email"} component={InputDefault} />         
            </Grid>

        </div>
    )
}

Login = reduxForm({ form: "login"})(Login)

export default Login