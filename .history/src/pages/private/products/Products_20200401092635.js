import React,{ useEffect, useState } from 'react'
import { getUserProducts } from '../../../services/productService'
import { Table } from 'react-bootstrap'

function Products({ uid, userProducts,  }) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        uid &&
        getUserProducts(uid).then(resp => setProducts(resp))
        .catch(err => console.error(err))
    }, [])

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
                            products.map((el,i) => (
                                <>
                                    <td>
                                      <img src={el.image} alt="" width={50} height={50} />  
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