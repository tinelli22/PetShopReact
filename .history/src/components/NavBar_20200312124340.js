import React from 'react'
import { AppBar, Typography, Toolbar, Menu, IconButton} from '@material-ui/core'

function Navbar({ }) {

    return(
        <AppBar position="static" color={'primary'}>
        <Toolbar>
        {
            window.addEventListener('resize', ev => {
                if(ev.target.innerWidth > 500) {
                    return(
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
                } else {
                    return(
                        <>
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <Menu />
                            </IconButton>
                        </>
                    )
                }
            })
        }
        </Toolbar>
      </AppBar>
    )
}

export default Navbar