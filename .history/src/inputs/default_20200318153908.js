import React from 'react'
import { FormControl, InputLabel, FilledInput, } from '@material-ui/core'
import './style.css'


export default({ input, label, meta: { touched, error } }) => (
    <>
        <span>{label}</span><br />
        <input {...input} className={'input'}/>
    </>
)