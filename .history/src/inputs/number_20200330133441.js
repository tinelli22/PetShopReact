import React from 'react'
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap'


export default ({ input, label, min, max, id, meta: { touched, error } }) => (
    <FormGroup>
        <FormLabel id={'label'}>{label}</FormLabel>
        <FormControl id={id} {...input} type={'text'} minLength={min} maxLength={max} />
        {
            touched && error && <span id={'messageError'}>{error}</span>
        }
    </FormGroup>
)