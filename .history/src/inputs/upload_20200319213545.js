import React from 'react'
import { FormLabel, FormGroup } from 'react-bootstrap'
import './style.css'


export default({ input, label, data, onSetData, meta: { touched, error } }) => (
   <FormGroup>
       <FormLabel>{label}</FormLabel>
       <div className={'uploadArea'}>

       </div>
   </FormGroup>
)