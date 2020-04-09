import React from 'react'
import { FormLabel, FormGroup, Button } from 'react-bootstrap'
import { Image } from '@material-ui/icons'

import './style.css'


export default({ input, label, data, onDrop, meta: { touched, error } }) => (
   <FormGroup>
       <FormLabel id={'label'}>{label}</FormLabel>
       <div className={'uploadArea'}>
            <Image />
       </div>
   </FormGroup>
)