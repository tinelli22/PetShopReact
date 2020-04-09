import React from 'react'
import { Grid, Typography } from '@material-ui/core'


function PLayout({ children }) {

    return(
        <>
            <nav className={"navPrivate"}>
                <div>
                    <Typography className={"typo"}>
                        <span>PETSHOP INGÁ</span>
                    </Typography>
                    <Typography className={"typo"}>
                        <span>PETSHOP INGÁ</span>
                    </Typography>
                    <Typography className={"typo"}>
                        <span>PETSHOP INGÁ</span>
                    </Typography>
                </div>
                <Typography className={"typo"}>
                    <span>Sair</span>
                </Typography>
            </nav>
            <Grid container>
                { children }
            </Grid>
        </>    
    )
}

export default PLayout