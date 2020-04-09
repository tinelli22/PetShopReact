import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Field, reduxForm } from 'redux-form'
import Default from '../../../inputs/default'

function Login({ }) {

    return(
        <div className={"pageLogin"}>
            <Grid container alignItems={'center'} direction={"column"} justify={"center"}>
                <Field label={"email"} name={"email"} component={Default} />         
            </Grid>

        </div>
    )
}

Login = reduxForm({ form: "login"})(Login)

export default Login