import React from 'react'
import { FormLabel, FormGroup } from 'react-bootstrap'
import { Image } from '@material-ui/icons'

import './style.css'

export default({ input, label, onDrop, meta: { touched, error } }) => (
   <FormGroup>
       { console.log(input) }
       <FormLabel id={'label'}>{label}</FormLabel>
       <div className={'uploadArea'} id={'area'} onClick={() => openDialog()} onDrop={e => onDrop(e)}>
            <input {...input} hidden id={'inpfile'} type={'file'} />
            <Image />
       </div>
   </FormGroup>
)

const openDialog = () => {
    document.getElementById('inpfile').click()
}