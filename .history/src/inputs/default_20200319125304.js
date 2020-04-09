import React from 'react'
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import './style.css'


export default({ input, label, type, meta: { touched, error } }) => (
    <FormGroup>
        <FormLabel>{label}</FormLabel>
        <FormControl type={type || 'text'} {...input} />
    </FormGroup>
)