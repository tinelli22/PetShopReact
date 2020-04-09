import React,{ useEffect, useState } from 'react'
import TableComp from '../../../components/Table'
import { getUserProducts } from '../../../services/productService'

function Products({ uid, userProducts}) {


    useEffect(() => {
        getUserProducts(uid).then(resp => console.log(resp))
        .catch(err => console.error(err))
    }, [])

    return(
        <>
            
        </>
    )
}

const getHeader = [
    "Foto", "Nome", "Preço", "Ações"
]

export default Products