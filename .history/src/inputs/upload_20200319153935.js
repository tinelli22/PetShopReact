import React from 'react'
import { FormLabel, FormGroup, Form } from 'react-bootstrap'
import './style.css'


export default({ input, label, meta: { touched, error } }) => (
    <FormGroup>
        <FormLabel id={'label'}>{label}</FormLabel>
        <Form.File {...input} />
        {

        }
    </FormGroup>
)