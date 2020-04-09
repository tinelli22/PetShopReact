import React from 'react'
import { Grid, Typography } from '@material-ui/core'

function Login({ }) {

    return(
        <Grid container>
            <Grid item xs={12} sm={12} className={"gridHome"}>
               <Typography id={"titleHome"}>BEM VINDO! Cadastre sua loja aqui</Typography>     
            </Grid>
            <Grid item xs={12} sm={4} className={"gridHome"}>
               <Typography>Crie sua conta</Typography>     
            </Grid>
            <Grid item xs={12} sm={8} className={"gridHome"}>
               <Typography id={"titleHome"}>Faça o login</Typography>     
            </Grid>
        </Grid>
    )
}

export default Login