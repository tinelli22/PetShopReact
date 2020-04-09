import React from 'react'
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap'

export default({ label, min, max, onMethodChange, }) => (
    <FormGroup>
        <FormLabel id={'label'}>{label}</FormLabel>
        <FormControl type={'number'} minLength={min || 1} maxLength={max || 30} 
        onChange={e => onMethodChange(e)} />
    </FormGroup>
)