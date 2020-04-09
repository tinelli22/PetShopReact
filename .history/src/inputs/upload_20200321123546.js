import React from 'react'
import { FormLabel, FormGroup } from 'react-bootstrap'
import { Image } from '@material-ui/icons'

import './style.css'

export default({ input, label, img, onMethod, meta: { touched, error } }) => (
   <FormGroup>
       <FormLabel id={'label'}>{label}</FormLabel><br />
        {
            img ? renderInputImg(input, img) : renderInputDefault(input, onMethod)
        }
   </FormGroup>
)

const renderInputDefault = ({ value, onChange, ...rest}, onMethod) => {
    return(
        <>
            <input hidden id={'inpfile'} type={'file'} {...rest}
             onChange={e => onMethod(e)}/>
            <Image width={'35%'} height={'35%'} onClick={() => openDialog()} />
        </>
    )
}

const renderInputImg = ({ value, onChange, ...rest}, img) => {
    return(
        <>
            <img src={img} height={'200px'} width={'40%'} {...rest}
            onClick={() => openDialog()} alt="" 
             />
        </>
    )
}

const openDialog = () => {
    document.getElementById('inpfile').click()
}