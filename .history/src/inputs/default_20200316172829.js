import React from 'react'
import { FormControl, InputLabel, FilledInput } from '@material-ui/core'
import './style.css'

export default({ input, label, meta: { touched, error } }) => (
    <FormControl variant={'filled'} fullWidth>
        <InputLabel htmlFor={"inp"}>{label}</InputLabel>
        <FilledInput id={'inp'} {...input} className={"input"}/>
        {

        }
    </FormControl>
)