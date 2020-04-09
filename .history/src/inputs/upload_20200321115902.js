import React from 'react'
import { FormLabel, FormGroup } from 'react-bootstrap'
import { Image } from '@material-ui/icons'

import './style.css'

export default({ input, label, img, onMethod, meta: { touched, error } }) => (
   <FormGroup>
       <FormLabel id={'label'}>{label}</FormLabel>
       <div className={'uploadArea'} id={'area'} onClick={() => openDialog()}
       >
        {
            img ? renderInputImg(input, img) : renderInputDefault(input, onMethod)
        }
       </div>
   </FormGroup>
)

const renderInputDefault = ({ value, onChange, ...rest}, onMethod) => {
    return(
        <>
            <input hidden id={'inpfile'} type={'file'} {...rest}
             onChange={e => onMethod(e)}/>
            <Image />
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