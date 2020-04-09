import React from 'react'
import { TextField } from '@material-ui/core'
import './style.css'

export default({ input, label, meta: { touched, error } }) => (
    <>
        <TextField {...input} variant={"filled"} label={label} className={"input"} />
        {
            
        }
    </>
)