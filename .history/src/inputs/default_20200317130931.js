import React from 'react'
import { FormControl, InputLabel, FilledInput, InputAdornment, } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'


export default({ input, label, meta: { touched, error } }) => (
    <FormControl variant={'filled'}>
        <InputLabel>{label}</InputLabel>
        <FilledInput {...input}  endAdornment={
            <InputAdornment position={'end'}>
                <AccountCircle />
            </InputAdornment>
        }/>
        {

        }
    </FormControl>
)