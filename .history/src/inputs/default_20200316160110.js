import React from 'react'
import { FormControl, InputLabel, FilledInput } from '@material-ui/core'
import './style.css'

export default({ input, label, meta: { touched, error } }) => (
    <FormControl margin={"10px"}>
        <InputLabel htmlFor={"input"}>{label}</InputLabel>
        <FilledInput {...input} />
        {

        }
    </FormControl>
)