import React from 'react'
import './style.css'
import { Jumbotron } from 'react-bootstrap'
import { Grid } from '@material-ui/core'
import { reduxForm } from 'redux-form'

function Signup({ handleSubmit, }) {

    return(
        <div className={"pageSignup"}>
            <Jumbotron>
                <Grid container spacing={2} direction={'column'}>
                    <Grid item>

                    </Grid>
                </Grid>
            </Jumbotron>
        </div>
    )
}

Signup = reduxForm({ form: 'signup'})(Signup)

export default Signup