import React from 'react'
import { FormControl, InputLabel, } from '@material-ui/core'
import NumberFormat from 'react-number-format'
import './style.css'


export default({ input, label, meta: { touched, error } }) => (
    <FormControl variant={'filled'} fullWidth>
        <InputLabel>{label}</InputLabel>
        <NumberFormat {...input} prefix={'R$'} decimalSeparator={'.'} thousandSeparator={true}  />
        {

        }
    </FormControl>
)