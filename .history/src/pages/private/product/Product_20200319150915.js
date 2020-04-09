import React,{ useState } from 'react'
import { Grid, Container } from '@material-ui/core'
import { Field, reduxForm } from 'redux-form'

import Default from '../../../inputs/default'
import Select from '../../../inputs/select'
import Price from '../../../inputs/price'

function Product({ }) {
    
    const [open, setOpen] = useState(false)


    return(
        <Container fixed className={"pageProduct"}>
            <Grid container spacing={2} style={{marginTop: '10px'}}>
                <Grid item sm={6} xs={12} md={4}>
                    <Field name={'name'} label={'Nome'} component={Default} />
                </Grid>
                <Grid item sm={6} xs={12} md={4}>
                    <Field name={'category'} label={'Categoria'} 
                    content={getCategories()} component={Select} />
                </Grid>
                <Grid item sm={6} xs={12} md={4}>
                    <Field name={'price'} label={'Preço'} component={Price} />
                </Grid>

            </Grid>
        </Container>
    )
}

const getCategories = () => [
    { name: 'Cães', value: 'dogs'},
    { name: 'Gatos', value: 'cats'},
    { name: 'Aves', value: 'birds'},
]

Product = reduxForm({ form: 'product'})(Product)

export default Product