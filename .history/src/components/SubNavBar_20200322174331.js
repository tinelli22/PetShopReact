import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import DrawerContent from './DrawerContent'


function SubNavBar({ }) {

    const [drawer, setDrawer] = useState(false)
    const [title, setTitle] = useState("")

    const toggleDrawer = (text) => {
       
        setDrawer(!drawer)
        setTitle(text)
    }

    return(
      <>  
      <nav className={"subnav"}>
        <Typography className={"typo"}>
            <span  onClick={() => toggleDrawer("Cachorro")} >Cachorro</span>
        </Typography>   
        <Typography className={"typo"}>
            <span  onClick={() => toggleDrawer("Gato")}>Gato</span>
        </Typography>
        <Typography className={"typo"}>
            <span  onClick={() => toggleDrawer("Aves")}>Aves</span>
        </Typography>
        <Typography className={"typo"}>
            <span  onClick={() => toggleDrawer("Peixes")}>Peixes</span>
        </Typography>
      </nav>

        {
            <DrawerContent title={title} side={'left'} open={drawer} content={getInfo()} 
            onToggleDrawer={toggleDrawer} />
        }
      </>
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
            name: 'Petiscos', path: 'petiscos'
        },
        {
            name: 'Remédios', path: 'remedios'
        }
    ]
}