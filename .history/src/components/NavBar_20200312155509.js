import React, { useState, useEffect } from 'react'
import image from '../images/petlogo.png'




function Navbar({ }) {


    return(
      <nav className={"nav"}>
        <img src={image} alt="" height={'60'} />
      </nav>
    )
}

export default Navbar