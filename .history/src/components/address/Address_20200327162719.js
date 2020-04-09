import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { getCepService } from '../../services/variablesService'

import Number from '../../inputs/number'
import Default from '../../inputs/default'
import { Grid } from '@material-ui/core'

function Address({ handleSubmit, onSetAddress, onLoadForm }) {

    const getAddress = ({ target: { value } })  => {
        
        getCepService(value).then((resp) => {
            
            if(resp) {
                const { data } = resp
                
                if(!data.erro) {
                    onLoadForm({ address: data.logradouro, cep: value })
                } else {
                    console.log(data)
                }
            }
        })
    }

    return(
        <form>
        <Grid container spacing={1}>
                <Grid item xs={6} sm={4} md={4}>
                    <Field name={'cep'} label={'Cep'} min={8} max={8} onMethodChange={getAddress} 
                    component={Number} />
                </Grid>
                <Grid item xs={6} sm={4} md={4}>
                    <Field name={'address'} label={'Logradouro'} component={Default} />
                </Grid>
        </Grid>
        </form>
    )
}

Address = reduxForm({ form: 'address',})(Address)

export default Address