import React from 'react'
import { Button } from '@material-ui/core'

function Navbar({ }) {


  return(
    <>
      <nav className={"nav"}>
        <button variant={'outlined'} className={'dropbtn'}>Loja</button>
        <div className={'drop-content'}>
          <span>algo</span>
        </div>
      </nav>
      </>  
    )
}

export default Navbar