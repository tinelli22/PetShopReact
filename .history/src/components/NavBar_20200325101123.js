import React from 'react'
import { Button } from '@material-ui/core'

function Navbar({ }) {


  return(
    <>
      <nav className={"nav"}>
        <Button variant={'contained'} className={'dropdown'}>Loja</Button>
        <div className={'drop-content'}>
          algo
        </div>
      </nav>
      </>  
    )
}

export default Navbar