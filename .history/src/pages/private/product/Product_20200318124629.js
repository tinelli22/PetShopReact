import React from 'react'
import { Grid } from '@material-ui/core'
import { Field } from 'redux-form'
import Default from '../../../inputs/default'

function Product({ }) {
    
    return(
        <Grid container>
            <Grid item>
                <Field name={'name'} label={'Nome'} component={Default} />
            </Grid>
        </Grid>
    )
}

export default Product