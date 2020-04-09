import React from 'react'
import { Container, Grid } from '@material-ui/core'
import NavBar from '../components/NavBar'
import SubNavBar from '../components/SubNavBar'


function Layout({ children }) {

    return(
        <>
            <NavBar />
            <SubNavBar/>
            <Container >
            <Grid container>
                { children }
            </Grid>
            </Container>
        </>    
    )
}

export default Layout