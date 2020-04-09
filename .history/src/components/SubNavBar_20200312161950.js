import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function SubNavBar({ }) {


    return(
      <nav className={"subnav"}>
            <li>
               <Link to="">Produtos</Link>
            </li>
      </nav>
    )
}

export default SubNavBar