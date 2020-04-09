import React from 'react'
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap'

export const WithBlur = ({input, label, min, max, onMethodBlur, }) => (
    <FormGroup>
        <FormLabel id={'label'}>{label}</FormLabel>
        <FormControl type={'number'} min={min || 1} max={max || 30} {...input}
        onBlur={e => onMethodBlur(e)} />
    </FormGroup>
)

export const NumberDefault = ({input, label, min, max }) => (
    <FormGroup>
        <FormLabel id={'label'}>{label}</FormLabel>
        <FormControl type={'number'} min={min || 1} max={max || 30} {...input} />
    </FormGroup>
)