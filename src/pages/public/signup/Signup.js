import React, { useState} from 'react'
import './style.css'
import { Jumbotron } from 'react-bootstrap'
import { Grid, Button } from '@material-ui/core'
import { reduxForm, Field } from 'redux-form'
import { useHistory } from 'react-router-dom'

import Default from '../../../inputs/default'
import Password from '../../../inputs/password'

import validate from './validation'
import { createAccountService } from '../../../services/accountService'
import { Growl } from 'primereact/growl'
import { GrowlDefault, GrowlError } from '../../../components/Growls'

function Signup({ handleSubmit, valid}) {

    const history = useHistory()
    const [showPassword, setShowPassword] = useState(false)
    const [growl, setGrowl] = useState(false)
    const togglePassword = () => setShowPassword(!showPassword)
    

    const register = values => {
       createAccountService(values).then(_ => {
           GrowlDefault(growl, 'Conta criada com sucesso')
           history.push('/login')
       }).catch(err => GrowlError(growl, err))
    }

    return(
        <>
            <Growl ref={el => setGrowl(el)} />
            <Jumbotron>
            <form onSubmit={handleSubmit(register)}>
                <Grid container spacing={1} >
                    <Grid item xs={12} sm={6} md={6}>
                        <Field name={'name'} label={'Nome'} component={Default} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Field name={'email'} type={'email'} label={'Email'} component={Default} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Field name={'password'} label={'Senha'} show={showPassword} 
                        onTogglePassword={togglePassword} component={Password} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Button type={'submit'} disable={!valid ? "true" : "false" } 
                        variant={'contained'} id={"btnPrimary"}>Criar</Button>
                    </Grid>
                </Grid>
            </form>    
            </Jumbotron>
        </>
    )
}

Signup = reduxForm({ form: 'signup', validate})(Signup)

export default Signup