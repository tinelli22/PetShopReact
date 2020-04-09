import React from 'react'
import { FormControl, FormLabel, FormGroup } from 'react-bootstrap'
import CurrencyInput from 'react-currency-input'
import './style.css'


export default({ input, label, meta: { touched, error } }) => (
    <FormGroup>
        <FormLabel>{label}</FormLabel>
        <FormControl>
            <CurrencyInput decimalSeparator="," thousandSeparator="." prefix={"R$ "} {...input} />

        </FormControl>
        {

        }
    </FormGroup>
)