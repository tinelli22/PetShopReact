import React,{ useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Grid, Button } from '@material-ui/core'

import Default from '../../../inputs/default'
import Number from '../../../inputs/number'

function Store({  }) {

    const onChange = e => {
        console.log(e.target.value)
    }
    
    return(
        <>
            <Grid container spacing={1} style={{ marginTop: '15px' }}>
                <Grid item xs={12} sm={8} md={8}>
                    <Field name={'name'} label={'Nome da loja'} component={Default} />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                    <Number min={8} max={8} label={'Cep'} onMethodChange={onChange} />
                </Grid>
                <Grid item xs={8} sm={6} md={6}>
                    <Field name={'address'} label={'Endereço'} component={Default} />
                </Grid>
            </Grid>
        </>
    )
}

Store = reduxForm({ form: 'store', })(Store)

export default Store