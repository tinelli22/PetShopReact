import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'

function SubNavBar({ }) {


    return(
      <nav className={"subnav"}>
        <Typography className={"typo"}>
            <span id="label">Cachorro</span>
        </Typography>   
        <Typography className={"typo"}>
            <span id="label">Gato</span>
        </Typography>
        <Typography className={"typo"}>
            <span id="label">Aves</span>
        </Typography>
        <Typography className={"typo"}>
            <span id="label">Peixes</span>
        </Typography>
      </nav>
    )
}

export default SubNavBar