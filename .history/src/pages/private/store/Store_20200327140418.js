import React,{ useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Grid, Button } from '@material-ui/core'

import Default from '../../../inputs/default'
import Number from '../../../inputs/number'
import { getCepService } from '../../../services/variablesService'

function Store({  }) {

    const [value, setValue] = useState(false)

    const getCep = e => {
        getCepService(e.target.value).then(({ data }) => {
            if(!data.erro) {
                console.log(data)
                setValue(data)
            } else {
                console.log(data)
            }
        })
    }
    
    return(
        <>
            <Grid container spacing={1} style={{ marginTop: '15px' }}>
                <Grid item xs={12} sm={8} md={8}>
                    <Field name={'name'} label={'Nome da loja'} component={Default} />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                    <Number min={8} max={8} label={'Cep'} onMethodChange={getCep} />
                </Grid>
                {

                }
                <Grid item xs={8} sm={6} md={6}>
                    <Field name={'address'} label={'Endereço'} component={Default} />
                </Grid>
            </Grid>
        </>
    )
}

Store = reduxForm({ form: 'store', })(Store)

export default Store