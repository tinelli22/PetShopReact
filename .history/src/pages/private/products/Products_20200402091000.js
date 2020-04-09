import React,{ useEffect } from 'react'
import { getUserProducts } from '../../../services/productService'
import { Grid, } from '@material-ui/core'
import { Edit, Remove, RemoveCircleOutline } from '@material-ui/icons'
import { Table } from 'react-bootstrap'
import SearchBar from '../../../components/SearchBar'

import './style.css'
import { useHistory } from 'react-router-dom'

function Products({ uid, userProducts, onLoadProdsSuccess, onLoadProd}) {
    
    const history = useHistory()

    useEffect(() => {
        //uid &&
        getUserProducts("KS3Cfr6qOxgdBkXhaQ0uKwpJshp1").then(resp => onLoadProdsSuccess(resp))
        .catch(err => console.error(err))
    }, [])

    const goToEdit = async prod => {
        await onLoadProd(prod)
        history.push(`/prod/${prod.id}`)
    }

    return(
       <Grid container>
           
           <Grid item xs={12} sm={8} md={8} style={{ marginTop: '10px'}}>
                <SearchBar />
           </Grid>
           
           <Grid item xs={12} sm={12} md={12} style={{ marginTop: '10px'}}>
                <Table responsive bordered>
                    <thead>
                        <tr>
                          <th>Nome</th>
                          <th>Preço</th>
                          <th>Ações</th>  
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userProducts.map((el,i) => (
                                <tr key={i}>
                                    <td className={'td'}>
                                        <span>{el.name}</span>
                                    </td>
                                    <td className={'td'}>
                                        <span>{el.price.text}</span>
                                    </td>
                                    <td className={'actions'}>
                                        <Edit className={'icon'} onClick={() => goToEdit(el)} />
                                    </td>
                                </tr>    
                            ))
                        }
                    </tbody>
                </Table> 
           </Grid>
       </Grid>
    )
}


export default Products