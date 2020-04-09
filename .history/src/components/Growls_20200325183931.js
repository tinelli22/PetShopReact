
export const GrowlError = (growl, error) => {
    
    let message = ''

    switch (error) {
        case 'auth/invalid-password':
            message = 'Password incorreto/inválido'
            break
        case 'auth/id-token-expired':
            message = 'Sessão expirada'
            break
        case 'auth/session-cookie-expired':
            message = 'Sessão expirada'
            break
        case 'auth/email-already-exists':
            message = 'Email já em uso'
            break
        case 'auth/email-already-in-use':
            message = 'Email já em uso'
            break
        case 'auth/argument-error':
            message = 'Email não encontrado'
            break
        case 'auth/internal-error':
            message = 'Erro no servidor'
            break
        case 'auth/user-not-found':
            message = 'Email não cadastrado'
            break               
        default:
            message = error
    }
    
    growl.show({severity: 'error', summary: 'Erro!', detail: message, life: 5000})
}

const errors = [
    { name: 'auth/invalid-password', msg: 'Senha invalida' },
    { name: 'auth/id-token-expired', msg: 'Sessão expirada' },
    { name: 'auth/session-cookie-expired', msg: 'Sessão expirada' },
    { name: 'auth/email-already-exists', msg: 'Email já em uso' },
    { name: 'auth/email-already-in-use', msg: 'Email já em uso '},
    { name: 'auth/argument-error', msg: 'Email não encontrado'},
    { name: 'auth/internal-error', msg: 'Erro interno no servidor'}
]

export const GrowlDefault = (growl, message, severity) => {
    growl.show({severity: severity || 'success', summary: 'Sucesso!', detail: message, life: 5000})
}

