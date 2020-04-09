import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default ({ label, content, }) => {
    
    const history = useHistory()

    return(
        <Dropdown>
            <Dropdown.Toggle variant={'outline-info'}>
                {label}
            </Dropdown.Toggle>
            <Dropdown.Menu>
            {
                content.map((el, i) => (
                    <Dropdown.Item onClick={() => history.push(el.path)}>{el.name}</Dropdown.Item>
                ))
            }
            </Dropdown.Menu>
        </Dropdown>
    )
}