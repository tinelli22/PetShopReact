import React, { useState, useEffect } from 'react'
import { AppBar, Typography, Toolbar, IconButton} from '@material-ui/core'
import { Menu } from '@material-ui/icons'




function Navbar({ }) {


    return(
        <AppBar position="static" color={'primary'} className={"appbar"}>
        <Toolbar className={"toolbar"}>
           <img src={'../../assets/images/petlogo.png'} alt="Logo marca" />
        </Toolbar>
      </AppBar>
    )
}

export default Navbar