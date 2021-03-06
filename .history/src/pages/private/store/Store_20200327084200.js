import React,{ useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Grid, Button } from '@material-ui/core'
import { onUpload } from '../../../functions/onUpload'

import Default from '../../../inputs/default'
import Upload from '../../../inputs/upload'

function Store({  }) {

    const [img, setImg] = useState(null)

    const onChange = async e => {
        e.preventDefault()
        const { target: { files } } = e
        const resp = await onUpload(files[0])
        setImg(resp)
     }
 
     const onDrop = async e => {
         e.preventDefault()
         const { dataTransfer: { files } } = e
         const resp = await onUpload(files[0])
         setImg(resp)
     }
    
    return(
        <>
            <Grid container spacing={1} style={{ marginTop: '15px' }}>
                <Grid item xs={12} sm={8} md={8}>
                    <Field name={'name'} label={'Nome da loja'} component={Default} />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Field name={'image'} img={img} onMethodChange={onChange} onMethodDrop={onDrop}
                    label={'Imagem'} component={Upload} />
                </Grid>

                <Grid item xs={8} sm={6} md={6}>
                    <Field name={'address'} label={'Endereço'} component={Default} />
                </Grid>
            </Grid>
        </>
    )
}

Store = reduxForm({ form: 'store', })(Store)

export default Store