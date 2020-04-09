import React from 'react'
import { FormControl, InputLabel, FilledInput } from '@material-ui/core'


export default({ input, label, meta: { touched, error } }) => (
    <FormControl variant={'filled'} >
        <InputLabel htmlFor={"inp"}>{label}</InputLabel>
        <FilledInput id={'inp'} {...input} classname={"formControl"} />
        {

        }
    </FormControl>
)