import React from 'react'
import { Grid } from '@material-ui/core'
import AwesomeSlider from 'react-awesome-slider';

function Home({ }) {

    return(
        <>
            <Grid item xs={12} sm={6} style={{ backgroundColor: '#123456', height: '50%', marginTop: '10px'}}>
                <AwesomeSlider>

                </AwesomeSlider>
            </Grid>
            
        </>
    )
}

export default Home