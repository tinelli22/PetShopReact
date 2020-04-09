import React, { useState, useEffect } from 'react'
import image from '../images/petlogo.png'




function SubNavBar({ }) {


    return(
      <nav className={"subnav"}>
        <img src={image} alt="" height={40}/>
      </nav>
    )
}

export default SubNavBar