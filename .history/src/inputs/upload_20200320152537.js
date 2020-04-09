import React from 'react'
import { FormLabel, FormGroup } from 'react-bootstrap'
import { Image } from '@material-ui/icons'

import './style.css'

export default({ input: {value, ...rest}, label, onDrop, meta: { touched, error } }) => (
   <FormGroup>
       {  }
       <FormLabel id={'label'}>{label}</FormLabel>
       <div className={'uploadArea'} id={'area'} onClick={() => openDialog()}>
            <input hidden id={'inpfile'} type={'file'} {...rest} />
            <Image />
       </div>
   </FormGroup>
)

const openDialog = () => {
    document.getElementById('inpfile').click()
}