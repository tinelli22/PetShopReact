import React from 'react'
import { Container } from '@material-ui/core'
import NavBar from '../components/NavBar'


function Layout({ children }) {

    return(
        <>
            <NavBar />
            <Container>
                { children }
            </Container>
        </>    
    )
}

export default Layout