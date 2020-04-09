import React from 'react'
import image from '../images/petlogo.png'


function Navbar({ }) {


  return(
    <>
      <nav className={"nav"}>
        
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