import React, { useState } from 'react'
import image from '../images/petlogo.png'
import { Typography } from '@material-ui/core'
import DrawerContent from './DrawerContent'


function Navbar({ }) {

  const [drawer, setDrawer] = useState(false)
  const [title, setTitle] = useState("")

  const toggleDrawer = (text) => {
    setDrawer(!drawer)
    setTitle(text)
  }

  return(
    <>
      <nav className={"nav"}>
        <img src={image} alt="" height={40} style={{ marginLeft: '6px' }} />
        <Typography className={"typo"}>
          <span onClick={() => toggleDrawer("Serviços")}>Serviços</span>
        </Typography>
        </nav>
        {
          <DrawerContent open={drawer} title={title} onToggleDrawer={toggleDrawer} content={getInfo()} />
        }
      </>  
    )
}

export default Navbar

function getInfo() {

  return [
    { name: "Banho", path: 'banho'},
    { name: "Banho e Tosa", path: 'banho&tosa'},
    { name: "Doação", path: 'doacao'}
  ]
}