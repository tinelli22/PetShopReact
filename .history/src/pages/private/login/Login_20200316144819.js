import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Field } from 'redux-form'
import InputDefault from '../../../inputs/InputDefault'

function Login({ }) {

    return(
        <Grid container className={"pageLogin"}>
            <Grid item xs={12} sm={12} >
                <Field label={"email"} name={"email"} component={InputDefault} />         
            </Grid>
        </Grid>
    )
}

export default Login