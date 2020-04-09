import React,{ useEffect, useState } from 'react'
import { getUserProducts } from '../../../services/productService'

function Products({ uid, userProducts, onLoadProdsSuccess }) {


    useEffect(() => {
        uid &&
        getUserProducts(uid).then(resp => onLoadProdsSuccess(resp))
        .catch(err => console.error(err))
    }, [])

    console.log(userProducts)
    return(
        <>
           
        </>
    )
}


export default Products