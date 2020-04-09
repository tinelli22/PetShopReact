import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { getCepService } from '../../services/variablesService'

import Number from '../../inputs/number'
import Default from '../../inputs/default'
import { Grid } from '@material-ui/core'

function Address({ handleSubmit, onSetAddress, onLoadForm }) {

    const getAddress = values  => ({ target: { value } }) => {
        console.log(values)
    }

    return(
        <>
            <form onBlur={handleSubmit(getAddress)}>
                <Grid item xs={6} sm={4} md={4}>
                    <Field name={'cep'} label={'Cep'} component={Number} />
                </Grid>
                <Grid item xs={6} sm={4} md={4}>
                    <Field name={'address'} label={'Logradouro'} component={Default} />
                </Grid>
            </form>
        </>
    )
}

Address = reduxForm({ form: 'address',})(Address)

export default Address