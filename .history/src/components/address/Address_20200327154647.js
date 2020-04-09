import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { getCepService } from '../../services/variablesService'

import Number from '../../inputs/number'
import Default from '../../inputs/default'
import { Grid } from '@material-ui/core'

function Address({ handleSubmit, onSetAddress, onLoadForm }) {

    const getAddress = ({ cep })  => {
        const num = parseInt(cep)
        getCepService(num).then(({ data }) => {
            if(!data.error) {
                //console.log(data)
                onLoadForm({ address: data.logradouro, cep: data.cep })
            } else {
                console.log(data)
            }
        })
    }

    return(
        <Grid container direction={'row'} spacing={1}>
            <form onBlur={handleSubmit(getAddress)}>
                <Grid item xs={6} sm={4} md={4}>
                    <Field name={'cep'} label={'Cep'} min={8} max={8} component={Number} />
                </Grid>
                <Grid item xs={6} sm={4} md={4}>
                    <Field name={'address'} label={'Logradouro'} component={Default} />
                </Grid>
            </form>
        </Grid>
    )
}

Address = reduxForm({ form: 'address',})(Address)

export default Address