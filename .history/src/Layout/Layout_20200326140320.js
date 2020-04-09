import React from 'react'
import NavBar from '../components/NavBar'
import { Container } from 'react-bootstrap'
import { userAlreadyLoggedService } from '../services/accountService'
import { useHistory } from 'react-router-dom'


function Layout({ children, user, onLogSuccess }) {
    
    const history = useHistory()

    userAlreadyLoggedService()
    .then(data => {
        onLogSuccess(data)
        history.push('/home')
    })
    .catch(err => console.error(err))

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