import React from 'react'
import Dropdown from './Dropdown'

function Navbar({ }) {


  return(
    <>
      <nav className={"nav"}>
        <Dropdown label={'LOJA'} content={getStoreOptions} />
      </nav>
      </>  
    )
}

export default Navbar

const getStoreOptions = [
  { name: 'Cadastrar', path: '/criar' },
  { name: 'Logar', path: '/login' },
]