import React from 'react'
import { FormControl, InputAdornment, InputLabel, Input, IconButton, FilledInput } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

export default({ input, label, show, onTogglePassword, meta: { touched, error } }) => (
   <FormControl variant={"filled"}>
       <InputLabel htmlFor={'inp'}>{label}</InputLabel>
       <FilledInput id={'inp'} {...input} type={show ? 'text' : 'password'} endAdornment={
           <InputAdornment position={'end'}>
               <IconButton onClick={() => onTogglePassword(!show)}>
                   { show ? <VisibilityOff /> : <Visibility /> }
               </IconButton>
           </InputAdornment>
       } />
   </FormControl>
)