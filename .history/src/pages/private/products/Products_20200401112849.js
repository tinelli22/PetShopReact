import React,{ useEffect, useState } from 'react'
import { getUserProducts } from '../../../services/productService'
import { Table,  } from 'react-bootstrap'
import './style.css'

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
                    {
                            products.map((el,i) => (
                                    <tr key={i}>
                                        <td className={'first'}>
                                            <img src={el.image} alt="" width={50} height={50} />  
                                            <span>{el.name}</span>
                                        </td>   
                                        <td className={'first'}>
                                           {el.price.text} 
                                        </td>
                                       
                                        <td className={'actions'}>
                                           <span>Editar</span>
                                           <span>Remover</span> 
                                        </td>
                                    </tr>
                            ))
                    }
                </tbody>
           </Table>
        </>
    )
}


export default Products