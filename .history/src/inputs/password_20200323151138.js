import React from 'react'
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import './style.css'

export default({ input, label, show, onTogglePassword, meta: { touched, error } }) => (
   <FormGroup>
        <FormLabel id={'label'}>{label}</FormLabel>
        <FormControl type={show ? 'text' : 'password'} {...input} className={'input'} />
        <div style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <span id={"span"} onClick={() => onTogglePassword()} >{show ? 'esconder' : 'mostrar'}</span>
            {
               touched && error && <span id={'messageError'}>{error}</span>
            }    
        </div>
   </FormGroup>
)