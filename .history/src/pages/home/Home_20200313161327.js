import React from 'react'
import { Grid } from '@material-ui/core'
import AwesomeSlider from 'react-awesome-slider';
import petshop1  from '../../images/petshop1.jpg'
import petshop2  from '../../images/petshop2.jpg'
import petshop3  from '../../images/petshop3.jpg'

function Home({ }) {

    return(
        <>
            <Grid item xs={12} sm={12} className={"gridHome"}>
                <AwesomeSlider>
                    <div data-src={petshop1} />
                    <div data-src={petshop2} />
                    <div data-src={petshop3} />
                </AwesomeSlider>
            </Grid>
            
        </>
    )
}

export default Home