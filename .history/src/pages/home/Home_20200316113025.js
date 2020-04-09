import React from 'react'
import { Grid, Typography } from '@material-ui/core'

function Home({ }) {

    return(
        <>
            <Grid item xs={12} sm={12} className={"gridHome"}>
               <Typography id={"titleHome"}>BEM VINDO AO PETSHOP INGÁ</Typography>     
            </Grid>
            <Grid item xs={12} sm={12} className={"gridHome"}>
               <Typography id={"hightLightHome"}>DESTAQUES DE HOJE</Typography>

            </Grid>
        </>
    )
}

export default Home