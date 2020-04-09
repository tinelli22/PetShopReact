import React, { useState} from 'react'
import './style.css'
import { Jumbotron } from 'react-bootstrap'
import { Grid, Button } from '@material-ui/core'
import { reduxForm, Field } from 'redux-form'
import { useHistory } from 'react-router-dom'

import Default from '../../../inputs/default'
import Password from '../../../inputs/password'

import validate from './validation'

function Signup({ handleSubmit, valid}) {

    const history = useHistory()
    const [showPassword, setShowPassword] = useState(false)
    const togglePassword = () => setShowPassword(!showPassword)

    return(
        <div className={"pageSignup"}>
            <Jumbotron className={'jumbcont'}>
            <form>
                <Grid container spacing={1} direction={'column'} >
                    <Grid item>
                        <Field name={'name'} label={'Nome'} component={Default} />
                    </Grid>
                    <Grid item>
                        <Field name={'email'} type={'email'} label={'Email'} component={Default} />
                    </Grid>
                    <Grid item>
                        <Field name={'password'} label={'Senha'} show={showPassword} 
                        onTogglePassword={togglePassword} component={Password} />
                    </Grid>
                    <Grid item>
                        <Button disable={!valid ? true : false } 
                        variant={'contained'} id={"btnPrimary"}>Criar</Button>
                    </Grid>
                </Grid>
            </form>    
            </Jumbotron>
        </div>
    )
}

Signup = reduxForm({ form: 'signup', validate})(Signup)

export default Signup