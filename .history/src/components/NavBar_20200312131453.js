import React, { useState, useEffect } from 'react'
import { AppBar, Typography, Toolbar, Menu, IconButton} from '@material-ui/core'

function Navbar({ open }) {

    const [width, setWidth] = useState(0)

    useEffect(() => {
        window.addEventListener('resize', ev => ev.target.innerWidth)
    }, [width])


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
                <IconButton edge="start" color="secondary" aria-label="menu">
                    <Menu open={open || false} />
                </IconButton>
                <Typography variant="h6">
                    Menu
                </Typography>
            </>
        }
        </Toolbar>
      </AppBar>
    )
}

export default Navbar