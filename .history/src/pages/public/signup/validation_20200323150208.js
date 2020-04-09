
export default function validate(values) {
    console.log(values)
    const errors = {}

    if(!values.name) {
        errors.name = 'Campo obrigatório'
    } else if(values.name.length < 4) {
        errors.name = 'Mínimo 5 caracteres'
    }

    
    
    return errors
}