import React,{ useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Grid, Button } from '@material-ui/core'

import Default from '../../../inputs/default'
import Number from '../../../inputs/number'

function Store({  }) {

    const [address, setAddress] = useState(false)
    
    const getAddress = ({ target: { value } }) => {
        
    }
    
    return(
        <>
            <Grid container spacing={1} style={{ marginTop: '15px' }}>
                <Grid item xs={12} sm={12} md={12}>
                    <Field name={'name'} label={'Nome da loja'} component={Default} />
                </Grid>
                <Grid item xs={6} sm={4} md={4}>
                    <Field name={'cep'} label={'Cep'} min={8} max={8}  component={Number} />
                </Grid>
            </Grid>
    
        </>
    )
}

Store = reduxForm({ form: 'store', })(Store)

export default Store