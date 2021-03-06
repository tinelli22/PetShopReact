import React from 'react'
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import './style.css'

export default({ input, label, show, onTogglePassword, meta: { touched, error } }) => (
   <FormGroup>
       <FormLabel>{label}</FormLabel>
       <FormControl type={'password'} {...input} />
       <span id={"span"}>mostrar</span>    
   </FormGroup>
)