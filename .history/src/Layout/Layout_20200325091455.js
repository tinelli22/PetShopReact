import React from 'react'
import { Grid } from '@material-ui/core'
import NavBar from '../components/NavBar'


function Layout({ children }) {

    return(
        <>
            <NavBar />
            <Grid container>
                { children }
            </Grid>
        </>    
    )
}

export default Layout