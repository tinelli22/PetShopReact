import React from 'react'
import { Container } from '@material-ui/core'
import NavBar from '../components/NavBar'
import SubNavBar from '../components/SubNavBar'


function Layout({ children }) {

    return(
        <>
            <NavBar />
            <SubNavBar/>
            <Container >
                { children }
            </Container>
        </>    
    )
}

export default Layout