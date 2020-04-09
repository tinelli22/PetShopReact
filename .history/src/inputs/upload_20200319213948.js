import React from 'react'
import { FormLabel, FormGroup, Button } from 'react-bootstrap'
import './style.css'


export default({ input, label, data, onSetData, meta: { touched, error } }) => (
   <FormGroup>
       <FormLabel id={'label'}>{label}</FormLabel>
       <div className={'uploadArea'}>
            <Button variant={'light'}>Inserir</Button>
       </div>
   </FormGroup>
)