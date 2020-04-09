import React from 'react'
import './style.css'
import { Jumbotron } from 'react-bootstrap'
import { Grid } from '@material-ui/core'
import { reduxForm, Field } from 'redux-form'

import Default from '../../../inputs/default'

function Signup({ handleSubmit, }) {

    return(
        <div className={"pageSignup"}>
            <Jumbotron>
            <form>
                <Grid container spacing={2} direction={'column'}>
                    <Grid item>
                        <Field name={'name'} label={'Nome'} component={Default} />
                    </Grid>
                </Grid>
            </form>    
            </Jumbotron>
        </div>
    )
}

Signup = reduxForm({ form: 'signup'})(Signup)

export default Signup