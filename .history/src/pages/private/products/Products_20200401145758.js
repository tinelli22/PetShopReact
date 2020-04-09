import React,{ useEffect, useState } from 'react'
import { getUserProducts } from '../../../services/productService'
import { Grid, } from '@material-ui/core'
import './style.css'
import SearchBar from '../../../components/SearchBar'
import { Table } from 'react-bootstrap'

function Products({ uid, userProducts, onLoadProdsSuccess}) {

    useEffect(() => {
        uid &&
        getUserProducts(uid).then(resp => onLoadProdsSuccess(resp))
        .catch(err => console.error(err))
    }, [])

    console.log(userProducts)

    return(
       <Grid container>
           <Grid item xs={12} sm={12} md={12}>
                <SearchBar />
           </Grid>
           <Grid item xs={12} sm={12} md={12}>
                <Table responsive bordered>
                    <tbody>
                        {
                            userProducts.map((el,i) => (
                                <tr key={i}>
                                    <td className={'first'}>
                                        <img src={el.image} alt="" height={80} width={80} />
                                        <span>{el.name}</span>
                                    
                                        <span>{el.price.text}</span>
                                        <span>Editar</span>
                                        <span>Remover</span>
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