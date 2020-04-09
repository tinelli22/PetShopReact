import React,{ useState } from 'react'
import { Grid, Typography, Button, Paper } from '@material-ui/core'
import { Field, reduxForm } from 'redux-form'
import { SendOutlined } from '@material-ui/icons'
import Default from '../../../inputs/default'
import password from '../../../inputs/password'
import { Jumbotron } from 'react-bootstrap'

function Login({ }) {

    const [showPassword, setShowPassword] = useState(false)
    

    return(
            <div className={"pageLogin"}>
                <Jumbotron>
                    <Grid container spacing={2} direction={'column'}
                    >
                        <Grid item>
                            <Field label={"email"} type={'email'} name={"email"} component={Default} />         
                        </Grid>
                        <Grid item>
                            <Field label={"senha"} name={"senha"} component={password} 
                            show={showPassword} onTogglePassword={setShowPassword} />
                        </Grid>
                        <Grid item>
                            <Button variant={'contained'} id={"btnPrimary"}
                            endIcon={<SendOutlined />}>Entrar</Button>

                        </Grid>
                    </Grid>
                </Jumbotron>
            </div>
    )
}

Login = reduxForm({ form: "login"})(Login)

export default Login