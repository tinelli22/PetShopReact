import React from 'react'
import { Typography } from '@material-ui/core'
import NavBar from '../components/NavBar'
import { Container } from 'react-bootstrap'


function Layout({ children, user }) {

    return(
        <>
            <Typography id={"title"}>Pet Shop Perto</Typography>
            <NavBar user={user} />
            <Container>
                { children }
            </Container>
        </>    
    )
}

export default Layout