import React,{ useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Grid, Button } from '@material-ui/core'

import Default from '../../../inputs/default'
import Number from '../../../inputs/number'
import Address from '../../../containers/common/Address'

function Store({  }) {

    const [address, setAddress] = useState(false)
    
    return(
        <>
            <Grid container spacing={1} style={{ marginTop: '15px' }}>
                <Grid item xs={12} sm={8} md={8}>
                    <Field name={'name'} label={'Nome da loja'} component={Default} />
                </Grid>
                <Address onSetAddress={setAddress} />
            </Grid>
        </>
    )
}

Store = reduxForm({ form: 'store', })(Store)

export default Store