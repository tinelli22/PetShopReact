import React,{ useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Grid } from '@material-ui/core'

import Default from '../../../inputs/default'

function Store({  }) {

    
    return(
        <>
            <Grid container style={{ marginTop: '15px' }}>
                <Grid item xs={12} sm={6} md={6}>
                    <Field name={'name'} label={'Nome da loja'} component={Default} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Field name={'address'} label={'Endereço'} component={Default} />
                </Grid>
            </Grid>
        </>
    )
}

Store = reduxForm({ form: 'store', })(Store)

export default Store