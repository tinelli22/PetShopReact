import React from 'react'
import { FormControl, InputAdornment, InputLabel, Input, IconButton } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import './style.css'

export default({ input, label, show, onTogglePassword, meta: { touched, error } }) => (
   <FormControl>
       <InputLabel htmlFor={'inp'}>{label}</InputLabel>
       <Input id={'inp'} {...input} type={show ? 'text' : 'password'} endAdornment={
           <InputAdornment position={'end'}>
               <IconButton onClick={() => onTogglePassword(!show)}>
                   { show ? <VisibilityOff /> : <Visibility /> }
               </IconButton>
           </InputAdornment>
       } />
   </FormControl>
)