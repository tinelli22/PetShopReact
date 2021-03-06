import React from 'react'
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap'


export default ({input, label, min, max, }) => (
    <FormGroup>
        <FormLabel id={'label'}>{label}</FormLabel>
        <FormControl type={'number'} min={min || 1} max={max || 30} {...input} />
    </FormGroup>
)