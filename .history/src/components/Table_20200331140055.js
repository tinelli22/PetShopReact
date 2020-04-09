import React from 'react'
import { Table, } from 'react-bootstrap'

export default function TableComp({ content, header, }) {

    return(
        <Table responsive>
            <thead>
                <tr>
                    {
                        header.map((el, i) => (
                            <th>{el.title}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    content.map((el, i) => (
                        <>
                            <td>
                                <img src={el.image} alt="" />
                            </td>
                            <td>{el.name}</td>
                            <td>{el.price.text}</td>
                            <td>
                                
                            </td>
                        </>    
                    ))
                }
            </tbody>
        </Table>
    )
}