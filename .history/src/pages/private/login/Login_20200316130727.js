import React from 'react'
import { Grid, Typography } from '@material-ui/core'

function Login({ }) {

    return(
        <div className={"pageLogin"}>
            <Grid container>
                <Grid item xs={12} sm={12} >
                    <Typography id={"titleHome"}>BEM VINDO! Cadastre sua loja aqui</Typography>     
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Login