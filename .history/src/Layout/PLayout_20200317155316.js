import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

function PLayout({ children }) {

    return(
        <>
            <nav className={"navPrivate"}>
                <div style={{ display: 'flex', flexDirection: 'row'}}>
                    <Menu />
                </div>

                <div style={{ display: 'flex', flexDirection: 'row'}}>
                    <Menu />
                </div>
            </nav>
            <Grid container>
                { children }
            </Grid>
        </>    
    )
}

export default PLayout