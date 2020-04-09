import React,{ useState } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { Field, reduxForm } from 'redux-form'
import { SendOutlined } from '@material-ui/icons'
import Default from '../../../inputs/default'
import password from '../../../inputs/password'

function Login({ }) {

    const [showPassword, setShowPassword] = useState(false)
    

    return(
            <div className={"pageLogin"}>
                <Typography id={"titleHome"} style={{padding: '30px'}}>ÁREA DE ACESSO</Typography>
                <Grid container spacing={1} alignItems={'stretch'} direction={"column"}
                justify={"center"} >
                    <Grid item>
                        <Field label={"email"} name={"email"} component={Default} />         
                    </Grid>
                    <Grid item>
                        <Field label={"senha"} name={"senha"} component={password} 
                        show={showPassword} onTogglePassword={setShowPassword} />
                    </Grid>
                    <Grid item justify={'center'}>
                        <Button className={"btnPrimary"} variant={'contained'} endIcon={<SendOutlined />}>Entrar</Button>
                    </Grid>
                </Grid>
            </div>
    )
}

Login = reduxForm({ form: "login"})(Login)

export default Login