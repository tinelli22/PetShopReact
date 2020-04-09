import React from 'react'
import { Grid, Typography } from '@material-ui/core'


function PLayout({ children }) {

    return(
        <>
            <nav className={"navPrivate"}>
                <Typography className={"typo"}>
                    <span id="label">Novo Produto</span>
                </Typography>
            </nav>
            <Grid container>
                { children }
            </Grid>
        </>    
    )
}

export default PLayout