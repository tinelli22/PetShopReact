import React,{ useState } from 'react'
import { Grid, Container } from '@material-ui/core'
import { Field, reduxForm } from 'redux-form'

import Default from '../../../inputs/default'
import Select from '../../../inputs/select'

function Product({ }) {
    
    const [open, setOpen] = useState(false)

    const toggle = () => setOpen(!open)

    return(
        <Container fixed className={"pageProduct"}>
            <Grid container style={{marginTop: '10px'}}>
                <Grid item>
                    <Field name={'name'} label={'Nome'} component={Default} />
                </Grid>
                <Grid item>
                    <Field name={'category'} label={'Categoria'} open={open} onToggle={toggle} 
                    content={getCategories()} component={Select} />
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