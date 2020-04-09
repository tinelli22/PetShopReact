import React from 'react'
import { Toast } from 'react-bootstrap'

export const ToastError = (show, error) => {
    
    
    let message = errors.find(e => e.name === error).msg || 'Erro inesperado'
    console.log(message)
    return(
        <Toast show={show || false} delay={5000} autohide>
            <Toast.Header className={'toastHeader'}>
                <h3>Ocorreu um erro</h3>
            </Toast.Header>
            <Toast.Body>
                <span>{message}</span>                
            </Toast.Body>
        </Toast>
    )
}

const errors = [
    { name: 'auth/invalid-password', msg: 'Senha invalida' },
    { name: 'auth/id-token-expired', msg: 'Sessão expirada' },
    { name: 'auth/session-cookie-expired', msg: 'Sessão expirada' },
    { name: 'auth/email-already-exists', msg: 'Email já em uso' },
    { name: 'auth/email-already-in-use', msg: 'Email já em uso '},
    { name: 'auth/internal-error', msg: 'Erro interno no servidor'}
]