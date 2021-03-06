import React, { useState, useEffect } from 'react'
import { AppBar, Typography, Toolbar, Menu, IconButton} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

function Navbar({ open }) {

    const [width, setWidth] = useState(0)

    useEffect(() => {
        window.addEventListener('resize', ev => setWidth(ev.target.innerWidth))
    }, [width])



    return(
        <AppBar position="fixed" color={'primary'}>
        <Toolbar>
        {
           <div>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
                <Typography variant="h6">
                    Opções
                </Typography>
           </div>
        }
        </Toolbar>
      </AppBar>
    )
}

export default Navbar