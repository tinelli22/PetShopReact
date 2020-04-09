import React,{ useEffect, useState } from 'react'
import { getUserProducts } from '../../../services/productService'
import { Grid, Button, } from '@material-ui/core'
import './style.css'
import SearchBar from '../../../components/SearchBar'
import { Table, Col, Row, Container, Image } from 'react-bootstrap'

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
                                <tr>
                                    <td>
                                        <Image src={el.image} thumbnail width={80} height={80} />
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