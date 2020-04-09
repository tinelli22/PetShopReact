import React from 'react'
import image from '../images/petlogo.png'
import { Typography } from '@material-ui/core'


function Navbar({ }) {


  return(
    <>
      <nav className={"nav"}>
        <Typography className={'typo'}>Cadastrar Loja</Typography>
      </nav>
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