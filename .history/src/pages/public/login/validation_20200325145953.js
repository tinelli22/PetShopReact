
export default function validate(values) {
    const errors = {}

    if (!values.email) {
        errors.email = 'Campo obrigatório'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email inválido'
    }

    if(!values.password) { errors.password = 'Campo obrigatório' }
    else if(values.password.length < 6) { errors.password = 'Mínimo 6 caracteres' }
    
    return errors
}