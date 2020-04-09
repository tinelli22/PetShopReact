import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'

function SubNavBar({ }) {


    return(
      <nav className={"subnav"}>
        <Typography>
            <span id="label">Produtos</span>
        </Typography>   
      </nav>
    )
}

export default SubNavBar