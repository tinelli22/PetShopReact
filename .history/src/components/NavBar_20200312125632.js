import React, { useState } from 'react'
import { AppBar, Typography, Toolbar, Menu, IconButton} from '@material-ui/core'

function Navbar({ open }) {

    const [width, setWidth] = useState(window.screen.width)
    window.addEventListener('resize', ev => {
        console.log(ev)
        setWidth(ev.target.innerWidth)
    })

    const renderModeDesktop = () => (
        <>
            <Typography variant="h6">
            Inicio
            </Typography>
            <Typography variant="h6">
            Produtos
            </Typography>
            <Typography variant="h6">
            Serviços
            </Typography>
        </>
    )

    return(
        <AppBar position="static" color={'primary'}>
        <Toolbar>
        {
            width > 500 ? renderModeDesktop() :
            <>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <Menu open={open || false} />
                </IconButton>
            </>
        }
        </Toolbar>
      </AppBar>
    )
}

export default Navbar