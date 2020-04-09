import React, { useState, useEffect } from 'react'
import image from '../../assets/images/petlogo.png'




function Navbar({ }) {


    return(
      <nav className={"nav"}>
        <img src={image} alt="" />
      </nav>
    )
}

export default Navbar