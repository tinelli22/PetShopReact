import React from 'react'
import { AppBar, Typography, Toolbar, Menu, IconButton} from '@material-ui/core'

function Navbar({ }) {

    return(
        <AppBar position="static" color={'primary'}>
        <Toolbar>
        {
            window.addEventListener('resize', ev => {
                console.log(ev)
            })
        }
        </Toolbar>
      </AppBar>
    )
}

export default Navbar