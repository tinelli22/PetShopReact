import React, { useState, useEffect } from 'react'
import { AppBar, Typography, Toolbar, Menu, IconButton} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

function Navbar({ open }) {

    const [width, setWidth] = useState(0)

    useEffect(() => {
        window.addEventListener('resize', ev => setWidth(ev.target.innerWidth))
    }, [width])


    const renderModeDesktop = () => (
        <div>
            <Typography variant="h6">
            Inicio
            </Typography>
            <Typography variant="h6">
            Produtos
            </Typography>
            <Typography variant="h6">
            Serviços
            </Typography>
        </div>
    )

    return(
        <AppBar position="static" color={'primary'}>
        <Toolbar>
        {
           width < 500 ?
           <div>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
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