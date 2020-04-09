import React,{ useEffect, useState } from 'react'
import { getUserProducts } from '../../../services/productService'
import { Table } from 'react-bootstrap'

function Products({ uid, userProducts, onLoadProdsSuccess }) {


    useEffect(() => {
        uid &&
        getUserProducts(uid).then(resp => onLoadProdsSuccess(resp))
        .catch(err => console.error(err))
    }, [])

    console.log(userProducts)
    return(
        <>
           <Table responsive hover bordered>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            userProducts.map((el,i) => (
                                <>
                                    <td>
                                      <img src={el.image} alt="" width={250} height={250} />  
                                      {el.name}
                                    </td>  
                                </>
                            ))
                        }
                    </tr>
                </tbody>
           </Table>
        </>
    )
}


export default Products