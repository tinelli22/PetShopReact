import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { getCepService } from '../../services/variablesService'

import Number from '../../inputs/number'
import Default from '../../inputs/default'
import { Grid } from '@material-ui/core'

function Address({ handleSubmit, onSetAddress, onLoadForm }) {

    const getAddress = ({ cep })  => {
        const num = parseInt(cep)
        getCepService(num).then((resp) => {
            
            if(resp) {
                const { data } = resp
                console.log(data)
    
                if(!data.error) {
                    onLoadForm({ address: data.logradouro, cep: num })
                } else {
                    console.log(data)
                }
            }
        })
    }

    return(
        <form onBlur={handleSubmit(getAddress)}>
        <Grid container spacing={1}>
                <Grid item xs={6} sm={4} md={4}>
                    <Field name={'cep'} label={'Cep'} min={8} max={8} component={Number} />
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