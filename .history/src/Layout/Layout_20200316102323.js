import React from 'react'
import { Grid } from '@material-ui/core'
import NavBar from '../components/NavBar'
import SubNavBar from '../components/SubNavBar'


function Layout({ children }) {

    return(
        <>
            <NavBar />
            <SubNavBar/>
            <Grid container>
                { children }
            </Grid>
        </>    
    )
}

export default Layout