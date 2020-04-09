import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'

function SubNavBar({ }) {


    return(
      <nav className={"subnav"}>
        <Typography className={"typo"}>
            <span id="label">Produtos</span>
        </Typography>   
        <Typography className={"typo"}>
            <span id="label">Serviços</span>
        </Typography>
      </nav>
    )
}

export default SubNavBar