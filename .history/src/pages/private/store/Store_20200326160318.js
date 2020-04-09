import React,{ useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Grid } from '@material-ui/core'

import Default from '../../../inputs/default'

function Store({  }) {

    
    return(
        <>
            <Grid container style={{ marginTop: '15px' }}>
                <Grid item>
                    <Field name={'name'} label={'Nome da loja'} component={Default} />
                </Grid>
            </Grid>
        </>
    )
}

Store = reduxForm({ form: 'store', })(Store)

export default Store