import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { Field, reduxForm } from 'redux-form'
import Default from '../../../inputs/default'

function Product({ }) {
    
    return(
        <Container fixed>
            <Grid container style={{marginTop: '10px'}}>
                <Grid item>
                    <Field name={'name'} label={'Nome'} component={Default} />
                </Grid>
            </Grid>
        </Container>
    )
}

Product = reduxForm({ form: 'product'})(Product)

export default Product