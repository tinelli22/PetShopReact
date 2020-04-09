import React from 'react'
import NavBar from '../containers/common/NavBar'
import { Container } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'

function Layout({ children, user, onLogSuccess }) {
    


    return(
        <>
            <NavBar />
            <ToastContainer />
            <Container>
                { children }
            </Container>
        </>    
    )
}

export default Layout