import React from 'react'
import { Grid, Typography } from '@material-ui/core'

function Home({ }) {

    return(
        <>
            <Grid item xs={12} sm={12} className={"gridHome"}>
               <Typography>Bem Vindo ao Pet Shop Ingá</Typography>     
            </Grid>
        </>
    )
}

export default Home