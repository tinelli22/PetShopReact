import React,{ useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Field, reduxForm } from 'redux-form'
import Default from '../../../inputs/default'
import password from '../../../inputs/password'

function Login({ }) {

    const [showPassword, setShowPassword] = useState(false)
    

    return(
            <div className={"pageLogin"}>
                <Typography id={"titleHome"}style={{padding: '10px'}}>ÁREA DE ACESSO</Typography>
                <Grid container spacing={1} alignItems={'center'} direction={"column"} 
                justify={"space-between"} style={{ display: 'flex'}} >
                    <Grid item>
                        <Field label={"email"} name={"email"} component={Default} />         
                    </Grid>
                    <Grid item>
                        <Field label={"senha"} name={"senha"} component={password} 
                        show={showPassword} onTogglePassword={setShowPassword} />
                    </Grid>
                </Grid>
            </div>
    )
}

Login = reduxForm({ form: "login"})(Login)

export default Login