import React from 'react'
import { FormLabel, FormGroup } from 'react-bootstrap'
import CurrencyInput from 'react-currency-input'
import './style.css'


export default({ input, label, value, onPrice, meta: { touched, error } }) => (
    <FormGroup>
        <FormLabel id={'label'}>{label}</FormLabel>
        <br />
        <CurrencyInput decimalSeparator="," thousandSeparator="." prefix={"R$ "} 
        {...input} className={'inputMoney'} onChangeEvent={(e,b,c) => onPrice(c)} value={value} />
        {
            touched && error && <span id={'messageError'}>{error}</span>
        }
    </FormGroup>
)