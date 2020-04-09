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
                                <Row key={i}>
                                    <Col>
                                        <Image src={el.image} thumbnail />
                                        <span>{el.name}</span>
                                    </Col>
                                    <Col>
                                        <span>{el.price.text}</span>
                                    </Col>
                                    <Col>
                                       <Button variant={'text'}>Editar</Button>
                                       <Button variant={'text'}>Remover</Button> 
                                    </Col>
                                </Row>
                            ))
                        }
                    </tbody>
                </Table> 
           </Grid>
       </Grid>
    )
}


export default Products