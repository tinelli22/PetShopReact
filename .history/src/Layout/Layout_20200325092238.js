import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import NavBar from '../components/NavBar'


function Layout({ children }) {

    return(
        <>
            <Typography id={"title"}>Pet Shop Perto</Typography>
            <NavBar />
            <Grid container>
                { children }
            </Grid>
        </>    
    )
}

export default Layout