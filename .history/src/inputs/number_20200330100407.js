import React from 'react'
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap'

export default({input, label, min, max, onMethodBlur, }) => (
    <FormGroup>
        <FormLabel id={'label'}>{label}</FormLabel>
        <FormControl type={'number'} pattern={'[0-9]'} min={min || 1} max={max || 30} {...input}
        onBlur={e => onMethodBlur(e)} />
    </FormGroup>
)