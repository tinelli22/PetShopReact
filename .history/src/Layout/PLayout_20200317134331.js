import React from 'react'
import { Grid } from '@material-ui/core'


function PLayout({ children }) {

    return(
        <>
            <Grid container>
                { children }
            </Grid>
        </>    
    )
}

export default PLayout