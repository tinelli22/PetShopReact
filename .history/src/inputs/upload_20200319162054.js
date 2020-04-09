import React from 'react'
import { FormLabel, FormGroup } from 'react-bootstrap'
import './style.css'


export default({ input, label, meta: { touched, error } }) => (
    <FormGroup>
        <FormLabel id={'label'}>{label}</FormLabel>
        <input type={'file'} onChange={e => console.log(e)}  />
        {

        }
    </FormGroup>
)