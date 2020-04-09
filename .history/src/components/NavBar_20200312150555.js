import React, { useState, useEffect } from 'react'
import { AppBar, Typography, Toolbar, IconButton} from '@material-ui/core'
import { Menu } from '@material-ui/icons'




function Navbar({ open }) {


    return(
        <AppBar position="fixed" color={'primary'} className={"appbar"}>
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu/>
            </IconButton>
            <Typography variant="h6">
            Menu
            </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default Navbar