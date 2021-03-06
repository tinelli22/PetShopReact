import React,{ useState } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { Field, reduxForm } from 'redux-form'
import { SendOutlined } from '@material-ui/icons'
import Default from '../../../inputs/default'
import password from '../../../inputs/password'

function Login({ }) {

    const [showPassword, setShowPassword] = useState(false)
    

    return(
            <div>
                <Typography id={"titleHome"}>ÁREA DE ACESSO</Typography>
                <Grid container spacing={2} justify={'center'} direction={'column'} alignItems={'center'}
                >
                    <Grid item>
                        <Field label={"email"} name={"email"} component={Default} />         
                    </Grid>
                    <Grid item>
                        <Field label={"senha"} name={"senha"} component={password} 
                        show={showPassword} onTogglePassword={setShowPassword} />
                    </Grid>
                </Grid>
                <br />
                <Grid container spacing={1} justify={'center'} direction={'column'} alignItems={'center'}>
                    <Button variant={'contained'} 
                    endIcon={<SendOutlined />}>Entrar</Button>
                </Grid>
            </div>
    )
}

Login = reduxForm({ form: "login"})(Login)

export default Login