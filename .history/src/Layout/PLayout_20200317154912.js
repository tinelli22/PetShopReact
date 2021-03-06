import React from 'react'
import { Grid, Typography } from '@material-ui/core'


function PLayout({ children }) {

    return(
        <>
            <nav className={"navPrivate"}>
                    <Typography className={"typo"}>
                        <span>Produtos</span>
                    </Typography>
                    <Typography className={"typo"}>
                        <span>Agendar</span>
                    </Typography>
            </nav>
            <Grid container>
                { children }
            </Grid>
        </>    
    )
}

export default PLayout