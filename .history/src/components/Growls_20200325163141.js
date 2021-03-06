
export const GrowlError = (growl, error) => {
    
    let message = errors.find(e => e.name === error).msg || 'Erro inesperado'
    console.log(message)
    
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

