import React from 'react'
import { FormLabel, FormGroup } from 'react-bootstrap'
import { Image } from '@material-ui/icons'

import './style.css'

export default({ input, label, img, onMethodChange, onMethodDrop, meta: { touched, error } }) => (
   <FormGroup onDrop={e => onMethodDrop(e)} onDragStart={e => e.preventDefault()} onDragOver={e => e.preventDefault()} 
   onChange={e => onMethodChange(e)} >
       <FormLabel id={'label'}>{label}</FormLabel>
       <div className={'uploadArea'} id={'area'}
       >
        {
            img ? renderInputImg(input, img) : renderInputDefault(input)
        }
        {
            touched && error && <span id={'messageError'}>{error}</span>
        }
       </div>
   </FormGroup>
)

const renderInputDefault = ({ value, onChange, ...rest}) => {
    return(
        <div onClick={() => openDialog('inpfile')} >
            <input hidden id={'inpfile'} type={'file'} {...rest}
            />
            <Image />
        </div>
    )
}

const renderInputImg = ({ value, onChange, ...rest}, img) => {
    return(
        <>
            <input hidden id={'inpimg'} type={'file'} {...rest}
            />
            <img src={img} height={'200px'} width={'200px'} {...rest}
            onClick={() => openDialog('inpimg')} alt="" 
             />
        </>
    )
}

const openDialog = (id) => {
    document.getElementById(id).click()
}