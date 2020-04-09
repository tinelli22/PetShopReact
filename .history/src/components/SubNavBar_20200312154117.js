import React, { useState, useEffect } from 'react'
import { AppBar, Typography, Toolbar, IconButton} from '@material-ui/core'
import { Menu } from '@material-ui/icons'




function SubNavBar({ }) {


    return(
        <AppBar position="static" color={"secondary"}>
        <Toolbar>
            <Typography variant="h6">
                Produtos
            </Typography>
            <Typography variant="h6">
                Serviços
            </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default SubNavBar