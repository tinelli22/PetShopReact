import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import NavBar from '../components/NavBar'
import { Container } from 'react-bootstrap'


function Layout({ children }) {

    return(
        <>
            <Typography id={"title"}>Pet Shop Perto</Typography>
            <NavBar />
            <Container>
                { children }
            </Container>
        </>    
    )
}

export default Layout