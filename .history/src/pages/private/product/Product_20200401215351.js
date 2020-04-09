import React,{ useState } from 'react'
import { Grid } from '@material-ui/core'
import { Field, reduxForm } from 'redux-form'

import Default from '../../../inputs/default'
import Select from '../../../inputs/select'
import Price from '../../../inputs/price'
import Upload from '../../../inputs/upload'
import { Button } from 'react-bootstrap'
import { onUpload } from '../../../functions/onUpload'

import validate from './validation'
import { insertProductService } from '../../../services/productService'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'

function Product({ handleSubmit, valid, change, reset, onSaveProdSuccess, uid, onLoadProdForm }) {
    
    let { id } = useParams()
    console.log(id)

    const [img, setImg] = useState(null)
    const [value, setValue] = useState(0.0)

    const onSave = async values => {
        console.log(values)
        const prod = { uid, ...values, price: { text: values.price, value } }

        insertProductService(prod).then(resp => {
            onSaveProdSuccess(resp.product)
            toast.success(resp.message)
            reset()
            change('image', null)
            setImg(null)
        }).catch(err => toast.error(err))
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
                <Grid item sm={6} xs={12} md={6}>
                    <Field name={'name'} label={'Nome'} component={Default} />
                </Grid>
                <Grid item sm={6} xs={6} md={6}>
                    <Field name={'type'} label={'Tipo'} 
                    content={getTypes()} component={Select} />
                </Grid>
                <Grid item sm={6} xs={6} md={6}>
                    <Field name={'categorie'} label={'Categoria'} 
                    content={getCategories()} component={Select} />
                </Grid>
                <Grid item sm={6} xs={12} md={6}>
                    <Field name={'price'} label={'Preço'} onPrice={setValue} component={Price}  />
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                    <Field name={'image'} img={img} onMethodChange={onChangeEvent} onMethodDrop={onDrop}
                    label={'Imagem'} component={Upload} />
                </Grid>
                <Grid item sm={12} xs={12} md={12}>
                    <Button disable={!valid ? "true" : "false"} variant={'dark'} type={'submit'}>Cadastrar</Button>
                </Grid>
            </Grid>
            </form>
        </>
    )
}

const getTypes = () => [
    { name: 'Cães', value: 'dogs'},
    { name: 'Gatos', value: 'cats'},
    { name: 'Aves', value: 'birds'},
]

const getCategories = () => [
    { name: 'Rações', value: 'racoes'},
    { name: 'Petiscos', value: 'petiscos'},
    { name: 'Acessórios', value: 'acessorios'},
    { name: 'Medicina e Saúde', value: 'mediesau'},
    { name: 'Higiene e Limpeza', value: 'higielimp'},
    { name: 'Outros', value: 'outros' }
]

Product = reduxForm({ form: 'product', validate})(Product)

export default Product