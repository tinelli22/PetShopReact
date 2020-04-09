import React from 'react'
import { Button } from '@material-ui/core'

function Navbar({ }) {


  return(
    <>
      <nav className={"nav"}>
        <Button variant={'outlined'} className={'dropdown'}>Loja</Button>
        <div className={'drop-content'}>
          <span>algo</span>
        </div>
      </nav>
      </>  
    )
}

export default Navbar