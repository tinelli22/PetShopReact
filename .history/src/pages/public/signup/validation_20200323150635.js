
export default function validate(values) {
    console.log(values)
    const errors = {}

    if(!values.name) {
        errors.name = 'Campo obrigatório'
    } else if(values.name.length < 4) {
        errors.name = 'Mínimo 5 caracteres'
    }

    if (!values.email) {
        errors.email = 'Campo obrigatório'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email inválido'
    }

    if(!values.password) errors.password = 'Campo obrigatório'
    else if(values.password.length < 4) errors.password = 'Mínimo 5 caracteres'
    
    return errors
}