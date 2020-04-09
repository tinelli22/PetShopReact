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
                        <tr>
                        {
                            userProducts.map((el,i) => (
                                <>
                                    <Col xs={4} sm={4} md={4}>
                                        <Image src={el.image} thumbnail width={80} height={80} />
                                        <span>{el.name}</span>
                                    </Col>
                                    <Col xs={4} sm={4} md={4}>
                                        <span>{el.price.text}</span>
                                    </Col>
                                    <Col xs={4} sm={4} md={4}>
                                       <Button variant={'text'}>Editar</Button>
                                       <Button variant={'text'}>Remover</Button> 
                                    </Col>
                                </>    
                            ))
                        }
                        </tr>
                    </tbody>
                </Table> 
           </Grid>
       </Grid>
    )
}


export default Products