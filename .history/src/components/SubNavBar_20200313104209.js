import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import DrawerContent from './DrawerContent'


function SubNavBar({ }) {

    const [drawer, setDrawer] = useState(false)

    const toggleDrawer = () => {
       
        setDrawer(!drawer)
    }

    return(
      <nav className={"subnav"}>
        <Typography className={"typo"}>
            <span id="label" onClick={() => toggleDrawer()} >Cachorro</span>
        </Typography>   
        <Typography className={"typo"}>
            <span id="label" onClick={() => toggleDrawer()}>Gato</span>
        </Typography>
        <Typography className={"typo"}>
            <span id="label" onClick={() => toggleDrawer()}>Aves</span>
        </Typography>
        <Typography className={"typo"}>
            <span id="label" onClick={() => toggleDrawer()}>Peixes</span>
        </Typography>
        {
            drawer && <DrawerContent side={'left'} open={drawer} content={getInfo()} 
            onToggleDrawer={toggleDrawer} />
        }
      </nav>
    )
}

export default SubNavBar

function getInfo() {

    return [
        {
            name: "Acessórios", path: 'acessorios',
        },
        {
            name: 'Rações', path: 'racoes'
        },
        {
            name: 'Remédios', path: 'remedios'
        }
    ]
}