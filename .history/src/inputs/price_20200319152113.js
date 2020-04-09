import React from 'react'
import { FormLabel, FormGroup } from 'react-bootstrap'
import CurrencyInput from 'react-currency-input'
import './style.css'


export default({ input, label, meta: { touched, error } }) => (
    <FormGroup>
        <FormLabel>{label}</FormLabel>
        <CurrencyInput decimalSeparator="," thousandSeparator="." prefix={"R$ "} 
        {...input} className={'inputMoney'} />
        {

        }
    </FormGroup>
)