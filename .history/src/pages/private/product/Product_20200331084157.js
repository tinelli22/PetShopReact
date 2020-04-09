import React,{ useState } from 'react'
import { Grid, Container } from '@material-ui/core'
import { Field, reduxForm } from 'redux-form'

import Default from '../../../inputs/default'
import Select from '../../../inputs/select'
import Price from '../../../inputs/price'
import Upload from '../../../inputs/upload'
import { Button } from 'react-bootstrap'
import { onUpload } from '../../../functions/onUpload'

import validate from './validation'

function Product({ handleSubmit, valid, change }) {
    
    const [img, setImg] = useState(null)
    const [value, setValue] = useState(0.0)

    const onSave = async values => {
        console.log(values)
    }

    const onChangeEvent = async e => {
       e.preventDefault()
       const { target: { files } } = e
       const resp = await onUpload(files[0])
       setImg(resp)
       change('image', resp)
    }

    const onDrop = async e => {
        e.preventDefault()
        const { dataTransfer: { files } } = e
        const resp = await onUpload(files[0])
        setImg(resp)
        change('image', resp)
    }

    return(
        <>
            <form onSubmit={handleSubmit(onSave)}> 
            <Grid container spacing={2} style={{marginTop: '10px'}}>
                <Grid item md={3} sm={3} xs={12}>
                    <Field name={'image'} img={img} onMethodChange={onChangeEvent} onMethodDrop={onDrop}
                    label={'Imagem'} component={Upload} />
                </Grid>
                <Grid item sm={6} xs={12} md={6}>
                    <Field name={'name'} label={'Nome'} component={Default} />
                </Grid>
                <Grid item sm={6} xs={12} md={6}>
                    <Field name={'category'} label={'Categoria'} 
                    content={getCategories()} component={Select} />
                </Grid>
                <Grid item sm={6} xs={12} md={6}>
                    <Field name={'price'} label={'Preço'} onPrice={setValue} component={Price}  />
                </Grid>
                <Grid item sm={12} xs={12} md={12}>
                    <Button disable={!valid ? "true" : "false"} variant={'dark'} type={'submit'}>Cadastrar</Button>
                </Grid>
            </Grid>
            </form>
        </>
    )
}

const getCategories = () => [
    { name: 'Cães', value: 'dogs'},
    { name: 'Gatos', value: 'cats'},
    { name: 'Aves', value: 'birds'},
]

Product = reduxForm({ form: 'product', validate})(Product)

export default Product