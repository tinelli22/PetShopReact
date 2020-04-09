import React,{ useState, useEffect } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Grid, Button } from '@material-ui/core'
import validate from './validation'
import Default from '../../../inputs/default'
import Number from '../../../inputs/number'
import { getCepService } from '../../../services/variablesService'
import { saveStoreFromUser } from '../../../services/userService'
import { toast } from 'react-toastify'

function Store({ handleSubmit, change, uid, store, onLoadFormStore }) {

    const [place, setPlace] = useState(false)

    useEffect(() => {
        store && onLoadFormStore(store) && setPlace(store.place)
        console.log(place)
    }, [])

    const getAddress = ({ target: { value } }) => {
        
        value.length === 8 &&
        getCepService(value).then(resp => {
            if(resp) {
                const { data } = resp
                if(!data.erro) {
                   change('address', data.logradouro)
                   setPlace(data)
                }
            }
        })
    }

    const onSave = values => {
        
        const store = {
            ...values,
            place: {
                ...place
            }
        }

        saveStoreFromUser(uid, store).then(_ => toast.success("Dados salvo com sucesso"))
        .catch(err => {
            toast.error("Erro ao salvar os dados")
            console.error(err)
        })
    }
    
    return(
        <form onSubmit={handleSubmit(onSave)}>
            <Grid container spacing={1} style={{ marginTop: '15px' }}>
                <Grid item xs={12} sm={12} md={12}>
                    <Field name={'name'} label={'Nome da loja'} component={Default} />
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Field name={'cep'} label={'Cep'} min={8} max={8} onBlur={e => getAddress(e)} 
                    component={Number} />
                </Grid>
                <Grid item xs={8} sm={8} md={8}>
                    <Field name={'address'} label={'Logradouro'} component={Default} />
                </Grid>
                <Grid item xs={5} sm={5} md={5}>
                    <Field name={'phone1'} max={11} min={10} label={'Tel'} component={Number} />
                </Grid>
                <Grid item xs={5} sm={5} md={5}>
                    <Field name={'phone2'} max={11} min={10} label={'Tel2'} component={Number} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Button type={'submit'} variant={'contained'}>Salvar</Button>
                </Grid>
            </Grid>
    
        </form>
    )
}

Store = reduxForm({ form: 'store', validate })(Store)

export default Store