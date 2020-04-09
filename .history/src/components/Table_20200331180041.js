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
                                <img src={el.image} alt="" height={300} width={300} />
                            </td>
                            <td>{el.name}</td>
                            <td>{el.store.price.text}</td>
                            <td>

                            </td>
                        </>    
                    ))
                }
            </tbody>
        </Table>
    )
}