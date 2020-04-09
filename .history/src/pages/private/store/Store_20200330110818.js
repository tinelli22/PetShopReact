import React,{ useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Grid, Button } from '@material-ui/core'

import Default from '../../../inputs/default'
import Number from '../../../inputs/number'
import { getCepService } from '../../../services/variablesService'

function Store({ handleSubmit, onLoadAddress, }) {

    const [address, setAddress] = useState(false)

    const getAddress = ({ target: { value } }) => {
        value.length > 0 &&
        getCepService(value).then(resp => {
            if(resp) {
                const { data } = resp
                if(!data.erro) {
                    onLoadAddress({ cep: data.cep, address: data.logradouro})
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
                    <Field name={'cep'} label={'Cep'} min={8} max={8} onBlur={e => getAddress(e)} 
                    component={Number} />
                </Grid>
                <Grid item xs={8} sm={8} md={8}>
                    <Field name={'address'} label={'Logradouro'} component={Default} />
                </Grid>
                <Grid item xs={5} sm={5} md={5}>
                    <Field name={'phone1'} label={'Telefone'} component={Number} />
                </Grid>
                <Grid item xs={5} sm={5} md={5}>
                    <Field name={'phone2'} label={'Telefone (Opcional)'} component={Number} />
                </Grid>
            </Grid>
    
        </>
    )
}

Store = reduxForm({ form: 'store', })(Store)

export default Store