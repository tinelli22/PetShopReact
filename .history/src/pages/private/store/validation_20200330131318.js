
export default function validate(values) {
    const errors = {}

    if(!values.name) errors.name = 'Campo obrigatório'
    else if(values.name.length < 3) errors.name = 'Mínimo 3 caracteres'

    if(!values.address) errors.address = 'Campo obrigatório'

    if(!values.phone1) errors.phone1 = 'Campo obrigatório'
    else if(values.phone1.length < 10) errors.phone1 = 'Mínimo 10 números'
    else if(isNaN(Number(values.phone1))) errors.phone1 = 'Somente números'

    if(values.phone2) {
        if(values.phone2.length < 10) errors.phone2 = 'Mínimo 10 números'
        else if(isNaN(Number(values.phone2))) errors.phone2 = 'Somente números'
    }

    return errors
}