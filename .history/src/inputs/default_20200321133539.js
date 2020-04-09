import React from 'react'
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import './style.css'


export default({ input, label, type, meta: { touched, error } }) => (
    <FormGroup>
        <FormLabel id={'label'}>{label}</FormLabel>
        <FormControl type={type || 'text'} {...input} />
        {
            touched && error && <span id={'messageError'}>{error}</span>
        }
    </FormGroup>
)