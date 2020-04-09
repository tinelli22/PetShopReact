import React from 'react'
import { FormControl, InputLabel, FilledInput, } from '@material-ui/core'
import './style.css'


export default({ input, label, meta: { touched, error } }) => (
    <FormControl variant={'filled'}>
        <InputLabel>{label}</InputLabel>
        <FilledInput {...input} className={'input'} />
        {

        }
    </FormControl>
)