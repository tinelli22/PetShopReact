import React from 'react'
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap'


export default ({input, label, min, max, }) => (
    <FormGroup>
        <FormLabel id={'label'}>{label}</FormLabel>
        <FormControl {...input} type={'number'} minLength={min || 1} maxLength={max || 30} />
    </FormGroup>
)