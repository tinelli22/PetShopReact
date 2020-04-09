import React,{ useEffect } from 'react'
import { getUserProducts } from '../../../services/productService'
import { Grid, Button, } from '@material-ui/core'
import { Table } from 'react-bootstrap'
import SearchBar from '../../../components/SearchBar'

import './style.css'

function Products({ uid, userProducts, onLoadProdsSuccess}) {

    useEffect(() => {
        //uid &&
        getUserProducts("KS3Cfr6qOxgdBkXhaQ0uKwpJshp1").then(resp => onLoadProdsSuccess(resp))
        .catch(err => console.error(err))
    }, [])

    return(
       <Grid container>
           <Grid item xs={12} sm={12} md={12}>
                <SearchBar />
           </Grid>
           <br />
           <Grid item xs={12} sm={12} md={12}>
                <Table responsive bordered size={'sm'}>
                    <tbody>
                        {
                            userProducts.map((el,i) => (
                                <tr key={i} className={'row'}>
                                    <td>
                                        <span>{el.name}</span>
                                    </td>
                                    <td>
                                        <span>{el.price.text}</span>
                                    </td>
                                    <td>
                                       <Button variant={'text'}>Editar</Button>
                                       <Button variant={'text'}>Remover</Button> 
                                    </td>
                                </tr>    
                            ))
                        }
                    </tbody>
                </Table> 
           </Grid>
       </Grid>
    )
}


export default Products