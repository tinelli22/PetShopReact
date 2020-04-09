import React,{ useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { Container } from 'react-bootstrap'
import { userAlreadyLoggedService } from '../services/accountService'
import { useHistory } from 'react-router-dom'
import { Growl } from 'primereact/growl'

function Layout({ children, user, onLogSuccess }) {
    
    const [growl, setGrowl] = useState(false)

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
            <Growl ref={el => setGrowl(el)} />
            <Container>
                { children(growl)}
            </Container>
        </>    
    )
}

export default Layout