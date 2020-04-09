import React,{ useState } from 'react'
import { Grid, Container } from '@material-ui/core'
import { Field, reduxForm } from 'redux-form'

import Default from '../../../inputs/default'
import Select from '../../../inputs/select'
import Price from '../../../inputs/price'
import Upload from '../../../inputs/upload'
import { Button } from 'react-bootstrap'
import { onUpload } from '../../../functions/onUpload'


function Product({ handleSubmit }) {
    
   const [img, setImg] = useState(null)

   const onSave = async values => {
        //console.log(values)
        const resp = await onUpload(values.image[0])
        console.log(resp)
        setImg(resp)
   }

   const onChange = e => {
       e.preventDefault()
       console.log(e.target.value)
   }

    return(
        <Container fixed className={"pageProduct"}>
            <form onSubmit={handleSubmit(onSave)}> 
            <Grid container spacing={2} style={{marginTop: '10px'}}>
                <Grid item md={12} sm={12} xs={12}>
                    <Field name={'image'} img={img} onMethod={onChange} label={'Imagem'} component={Upload} />
                </Grid>
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
                <Grid item sm={12} xs={12} md={4}>
                    <Button variant={'dark'} type={'submit'}>Cadastrar</Button>
                </Grid>
            </Grid>
            </form>
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