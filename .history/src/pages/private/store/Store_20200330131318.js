import React,{ useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Grid, Button } from '@material-ui/core'
import validate from './validation'
import Default from '../../../inputs/default'
import Number from '../../../inputs/number'
import { getCepService } from '../../../services/variablesService'

function Store({ handleSubmit, onLoadAddress, }) {

    const onSave = values => {
        console.log(values)
    }
    
    return(
        <form onSubmit={handleSubmit(onSave)}>
            <Grid container spacing={1} style={{ marginTop: '15px' }}>
                <Grid item xs={12} sm={12} md={12}>
                    <Field name={'name'} label={'Nome da loja'} component={Default} />
                </Grid>
                <Grid item xs={8} sm={8} md={8}>
                    <Field name={'address'} label={'Logradouro'} component={Default} />
                </Grid>
                <Grid item xs={5} sm={5} md={5}>
                    <Field name={'phone1'} max={11} min={10} label={'Tel'} component={Number} />
                </Grid>
                <Grid item xs={5} sm={5} md={5}>
                    <Field name={'phone2'} max={11} min={10} label={'Tel2'} component={Number} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Button type={'submit'} variant={'contained'}>Salvar</Button>
                </Grid>
            </Grid>
    
        </form>
    )
}

Store = reduxForm({ form: 'store', validate })(Store)

export default Store