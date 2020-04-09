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
           <Table responsive hover bordered striped>
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
                            <th className={'first'}>
                                <img src={el.image} alt="" width={50} height={50} />  
                                <span>{el.name}</span>
                            </th>   
                            <th className={'first'}>
                                {el.price.text} 
                            </th>           
                            <th className={'actions'}>
                                <span>Editar</span>
                                <span>Remover</span> 
                            </th>
                        </tr>
                    ))
                }
                </tbody>
           </Table>
        </>
    )
}


export default Products