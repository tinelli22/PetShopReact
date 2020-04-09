import React from 'react'
import { Grid, Typography } from '@material-ui/core'


function PLayout({ children }) {

    return(
        <>
            <nav className={"navPrivate"}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Typography className={"typo"}>
                        <span>Produtos</span>
                    </Typography>
                    <Typography className={"typo"}>
                        <span>Agendar</span>
                    </Typography>
                </div>
            </nav>
            <Grid container>
                { children }
            </Grid>
        </>    
    )
}

export default PLayout