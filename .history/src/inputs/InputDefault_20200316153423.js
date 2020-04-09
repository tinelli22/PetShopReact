import React from 'react'
import { Grid, Typography, TextField } from '@material-ui/core'
import './style.css'

export default({ input, label, xs, sm, meta: { touched, error } }) => (

    <Grid item>
        <TextField {...input} variant={"filled"} label={label} className={"input"} />
        {

        }
    </Grid>
)