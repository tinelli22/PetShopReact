import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export default({ input, label, xs, sm, meta: { touched, error } }) => (
    <Grid item xs={xs} sm={sm}>
        <Typography>{label}</Typography>
        <input />
    </Grid>
)