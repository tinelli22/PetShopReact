import React,{ useEffect } from 'react'
import NavBar from '../components/NavBar'
import { Container } from 'react-bootstrap'
import { userAlreadyLoggedService } from '../services/accountService'
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