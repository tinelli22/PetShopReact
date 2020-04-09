import React,{ useState } from 'react'
import { Grid, Button } from '@material-ui/core'
import { Field, reduxForm } from 'redux-form'
import { SendOutlined } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import { Jumbotron } from 'react-bootstrap'
import { Growl } from 'primereact/growl'

import validate from './validation'
import Default from '../../../inputs/default'
import password from '../../../inputs/password'

import Auth from '../../../Auth'

import './style.css'
import { loginService } from '../../../services/accountService'
import { GrowlError } from '../../../components/Growls'

function Login({ handleSubmit, onLogOnSuccess }) {

    const history = useHistory()
    const [showPassword, setShowPassword] = useState(false)
    const togglePassword = () => setShowPassword(!showPassword)
    const [growl, setGrowl] = useState(false)

    const login = values => {
        loginService({...values}).then(resp => {
            onLogOnSuccess(resp)
            Auth.authenticate()
            history.push('/phome')
        })
        .catch(err => {
            console.error(err)
            GrowlError(growl, err)
        })
    }

    return(
            <>
                <Growl ref={el => setGrowl(el)} />
                <Jumbotron>
                    <form onSubmit={handleSubmit(login)}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6} md={6}>
                                <Field label={"email"} type={'email'} name={"email"} component={Default} />         
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Field label={"senha"} name={"password"} component={password} 
                                show={showPassword} onTogglePassword={togglePassword} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <Button type={'submit'} variant={'contained'} id={"btnPrimary"}
                                endIcon={<SendOutlined />}>Entrar</Button>
                            </Grid>
                        </Grid>
                    </form>    
                </Jumbotron>
            </>
    )
}

Login = reduxForm({ form: "login", validate})(Login)

export default Login