import React from 'react'
import { FormControl, InputLabel, } from '@material-ui/core'
import CurrencyInput from 'react-currency-input'
import './style.css'


export default({ input, label, meta: { touched, error } }) => (
    <FormControl variant={'filled'} fullWidth>
        <InputLabel>{label}</InputLabel>
        <CurrencyInput decimalSeparator="," thousandSeparator="." prefix={"R$ "} {...input} />
        {

        }
    </FormControl>
)