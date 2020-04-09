import React,{ useEffect, useState } from 'react'
import TableComp from '../../../components/Table'
import { getUserProducts } from '../../../services/productService'

function Products({ uid, userProducts, onLoadProdsSuccess }) {


    useEffect(() => {
        getUserProducts(uid).then(resp => onLoadProdsSuccess(resp))
        .catch(err => console.error(err))
    }, [])

    return(
        <>
          <TableComp header={getHeader} content={userProducts} /> 
        </>
    )
}

const getHeader = [
    "Foto", "Nome", "Preço", "Ações"
]

export default Products