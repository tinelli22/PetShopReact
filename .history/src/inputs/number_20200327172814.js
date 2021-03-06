import React from 'react'
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap'

export default({input, label, min, max, onMethodBlur, }) => (
    <FormGroup>
        <FormLabel id={'label'}>{label}</FormLabel>
        <FormControl type={'text'} pattern={'[0-9]'} minLength={min || 1} maxLength={max || 30} {...input}
        onBlur={e => onMethodBlur(e)} />
    </FormGroup>
)