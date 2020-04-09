import React from './node_modules/react'
import { Container } from './node_modules/@material-ui/core'
import NavBar from '../components/NavBar'
import SubNavBar from '../components/SubNavBar'


function Layout({ children }) {

    return(
        <>
            <NavBar />
            <SubNavBar/>
            <Container>
                { children }
            </Container>
        </>    
    )
}

export default Layout