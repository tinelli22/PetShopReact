import React from 'react'
import { FormLabel, FormGroup } from 'react-bootstrap'
import { Image } from '@material-ui/icons'

import './style.css'

export default({ input, label, img, onChange, meta: { touched, error } }) => (
   <FormGroup>
       <FormLabel id={'label'}>{label}</FormLabel>
       <div className={'uploadArea'} id={'area'} onClick={() => openDialog()}>
        {
            img ? renderInputImg(input, img, onChange) : renderInputDefault(input, onChange)
        }
       </div>
   </FormGroup>
)

const renderInputDefault = ({ value, onChange, ...rest}, onMethod) => {
    return(
        <>
            <input hidden id={'inpfile'} type={'file'} {...rest} onChange={e => onMethod(e)} 
            onDragOver={e => e.preventDefault()} />
            <Image />
        </>
    )
}

const renderInputImg = ({ value, onChange, ...rest}, img, onMethod) => {
    return(
        <>
            <img src={img} height={'200px'} width={'40%'} {...rest} onChange={e => onMethod(e)}
            onClick={() => openDialog()} alt="" onDragOver={e => e.preventDefault()} />
        </>
    )
}

const openDialog = () => {
    document.getElementById('inpfile').click()
}