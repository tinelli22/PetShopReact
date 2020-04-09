import React,{ useEffect } from 'react'
import NavBar from '../components/NavBar'
import { Container } from 'react-bootstrap'
import { userAlreadyLoggedService } from '../services/accountService'


function Layout({ children, user, onLogSuccess }) {
    
    

    useEffect(() => {
        userAlreadyLoggedService()
        .then(data => {
            onLogSuccess(data)
        })
        .catch(err => console.error(err))
    }, [])


    return(
        <>
            <NavBar user={user} />
            
            <Container>
                { children }
            </Container>
        </>    
    )
}

export default Layout