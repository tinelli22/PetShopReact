import React from 'react'
import { FormControl, InputLabel, Select, MenuItem, } from '@material-ui/core'
import './style.css'


export default({ input, label, open, content, onToggle, meta: { touched, error } }) => (
    <FormControl variant={'filled'} fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select open={open || false} {...input} onClick={() => onToggle()}>
        {
            content.map(el => (
                <MenuItem key={el.value} value={el.value}>{el.name}</MenuItem> 
            ))
        }
        </Select>
    </FormControl>
)