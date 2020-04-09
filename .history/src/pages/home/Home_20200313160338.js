import React from 'react'
import { Grid } from '@material-ui/core'
import AwesomeSlider from 'react-awesome-slider';

function Home({ }) {

    return(
        <>
            <Grid item xs={12} sm={6} className={"gridHome"}>
                <AwesomeSlider>

                </AwesomeSlider>
            </Grid>
            
        </>
    )
}

export default Home