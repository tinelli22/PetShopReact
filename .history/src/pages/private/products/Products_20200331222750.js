import React,{ useEffect, useState } from 'react'
import { getUserProducts } from '../../../services/productService'

function Products({ uid, userProducts, onLoadProdsSuccess }) {


    useEffect(() => {
        async function getProds() {
            await getUserProducts(uid).then(resp => onLoadProdsSuccess(resp))
            .catch(err => console.error(err))
        }
        
        getProds()
    }, [])

    console.log(userProducts)

    return(
        <>
           
        </>
    )
}


export default Products