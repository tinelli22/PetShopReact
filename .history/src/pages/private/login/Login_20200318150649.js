import React,{ useState } from 'react'
import { Grid, Typography, Button, Paper } from '@material-ui/core'
import { Field, reduxForm } from 'redux-form'
import { SendOutlined } from '@material-ui/icons'
import Default from '../../../inputs/default'
import password from '../../../inputs/password'

function Login({ }) {

    const [showPassword, setShowPassword] = useState(false)
    

    return(
            <div style={{padding: '10%'}}>
                <Paper style={{ backgroundColor: '#123456'}}>
                    <Grid container spacing={2} justify={'center'} direction={'column'} alignItems={'center'}
                    >
                        <Grid item>
                            <Field label={"email"} name={"email"} component={Default} />         
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
                </Paper>
            </div>
    )
}

Login = reduxForm({ form: "login"})(Login)

export default Login