import React, { useState, useEffect } from 'react'
import { AppBar, Typography, Toolbar, IconButton} from '@material-ui/core'
import { Menu } from '@material-ui/icons'




function Navbar({ open }) {


    return(
        <AppBar position="fixed" color={'primary'}>
        <Toolbar className={"toolbar"}>
            <Typography variant="h6">
            Dog & Cat
            </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default Navbar