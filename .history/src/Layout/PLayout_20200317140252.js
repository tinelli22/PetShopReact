import React from 'react'
import { Grid, Typography } from '@material-ui/core'


function PLayout({ children }) {

    return(
        <>
            <nav className={"navPrivate"}>
                <Typography className={"typo"}>
                    <span>Novo Produto</span>
                </Typography>
                <Typography className={"typo"}>
                    <span>Produtos</span>
                </Typography>
            </nav>
            <Grid container>
                { children }
            </Grid>
        </>    
    )
}

export default PLayout