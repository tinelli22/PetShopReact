import React,{ useEffect, useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Grid, Button } from '@material-ui/core'

import Default from '../../../inputs/default'
import Password from '../../../inputs/password'
import { saveUserOnCollection } from '../../../services/userService'
import { toast } from 'react-toastify'

function EditAccount({ user, onLoadForm, onUpdatedUser, handleSubmit, }) {

    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        user && onLoadForm(user)
    }, [])

    const togglePassword = () => setToggle(!toggle)

    const onSave = values => {
        //console.log(values)
        saveUserOnCollection(values).then(resp => toast.info("Dados salvo com sucesso"))
        .catch(err => toast.error('Erro ao salvar os novos dados'))
    }

    return(
        <form onSubmit={handleSubmit(onSave)} style={{ marginTop: '10px'}}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
                <Field name={'name'} label={'Nome'} component={Default} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Field name={'password'} label={'Senha'} show={toggle} onTogglePassword={togglePassword} 
                component={Password} />
            </Grid>
            <Grid item>
                <Button type={'submit'} variant={'contained'} color={'default'}>Salvar</Button>
            </Grid>
        </Grid>
        </form>
    )
}

EditAccount = reduxForm({ form: 'edit'})(EditAccount)

export default EditAccount