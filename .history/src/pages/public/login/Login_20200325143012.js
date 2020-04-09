import React,{ useState } from 'react'
import { Grid, Button, Divider } from '@material-ui/core'
import { Field, reduxForm } from 'redux-form'
import { SendOutlined } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import { Jumbotron } from 'react-bootstrap'

import Default from '../../../inputs/default'
import password from '../../../inputs/password'

import './style.css'

function Login({ }) {

    const history = useHistory()
    const [showPassword, setShowPassword] = useState(false)
    const togglePassword = () => setShowPassword(!showPassword)

    return(
            <>
                <Jumbotron>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={6}>
                            <Field label={"email"} type={'email'} name={"email"} component={Default} />         
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Field label={"senha"} name={"senha"} component={password} 
                            show={showPassword} onTogglePassword={togglePassword} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Button variant={'contained'} id={"btnPrimary"}
                            endIcon={<SendOutlined />}>Entrar</Button>
                        </Grid>
                    </Grid>
                </Jumbotron>
            </>
    )
}

Login = reduxForm({ form: "login"})(Login)

export default Login