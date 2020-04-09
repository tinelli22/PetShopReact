import React from 'react'
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import './style.css'

export default({ input, label, show, onTogglePassword, meta: { touched, error } }) => (
   <FormGroup>
        <FormLabel id={'label'}>{label}</FormLabel>
        <FormControl type={'password'} {...input} className={'input'} />
        <span id={"span"} onCLick={() => onTogglePassword(!show)} >{show ? 'esconder' : 'mostrar' || 'mostrar'}</span>    
   </FormGroup>
)