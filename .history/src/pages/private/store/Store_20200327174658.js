import React,{ useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Grid, Button } from '@material-ui/core'

import Default from '../../../inputs/default'
import Number from '../../../inputs/number'
import { getCepService } from '../../../services/variablesService'

function Store({ handleSubmit }) {

    const [address, setAddress] = useState(false)

    const getAddress = ({ target: { value } }) => {
        getCepService(value).then(resp => {
            if(resp) {
                const { data } = resp
                if(!data.erro) {
                    
                }
            }
        })
    }
    
    return(
        <>
            <Grid container spacing={1} style={{ marginTop: '15px' }}>
                <Grid item xs={12} sm={12} md={12}>
                    <Field name={'name'} label={'Nome da loja'} component={Default} />
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Field name={'cep'} label={'Cep'} min={8} max={8} onMethodBlur={getAddress} 
                    component={Number} />
                </Grid>
                <Grid item xs={8} sm={8} md={8}>
                    <Field name={'address'} label={'Logradouro'} component={Default} />
                </Grid>
            </Grid>
    
        </>
    )
}

Store = reduxForm({ form: 'store', })(Store)

export default Store