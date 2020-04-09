import React from 'react'
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import './style.css'


export default({ input, label, content, meta: { touched, error } }) => (
    <FormGroup>
        <FormLabel id={'label'} >{label}</FormLabel>
        <FormControl as={'select'} {...input}>
        {
            content.map((el, i) => (
                <option key={i} value={el.value} >{el.name}</option>
            ))
        }
        {
            touched && error && <span id={'messageError'}>{error}</span>
        }
        </FormControl>
    </FormGroup>
)