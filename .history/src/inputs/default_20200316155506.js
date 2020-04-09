import React from 'react'
import { FormControl, Input, InputLabel } from '@material-ui/core'
import './style.css'

export default({ input, label, meta: { touched, error } }) => (
    <FormControl>
        <InputLabel htmlFor={"input"}>{label}</InputLabel>
        <Input {...input} />
        {

        }
    </FormControl>
)