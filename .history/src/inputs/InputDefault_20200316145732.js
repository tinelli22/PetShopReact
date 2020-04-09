import React from 'react'
import { Grid, Typography, TextField } from '@material-ui/core'

export default({ input, label, xs, sm, meta: { touched, error } }) => (

    <Grid item xs={xs} sm={sm}>
        <TextField {...input} variant={"outlined"} label={label} />
        {
            
        }
    </Grid>
)