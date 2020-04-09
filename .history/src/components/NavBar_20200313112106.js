import React, { useState, useEffect } from 'react'
import image from '../images/petlogo.png'
import { Typography } from '@material-ui/core'



function Navbar({ }) {


    return(
      <nav className={"nav"}>
        <img src={image} alt="" height={40}/>
        <Typography className={"typo"}>
          Serviços
        </Typography>
      </nav>
    )
}

export default Navbar