import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default ({ label, content, }) => {
    
    const history = useHistory()

    return(
        <Dropdown className={'drop-toggle'}>
            <Dropdown.Toggle variant={'primary'}>
                {label}
            </Dropdown.Toggle>
            <Dropdown.Menu>
            {
                content.map((el, i) => (
                    <Dropdown.Item key={i} className={'drop-item'} 
                    onClick={() => el.path ? history.push(el.path) : el.fnc()}>{el.name}</Dropdown.Item>
                ))
            }
            </Dropdown.Menu>
        </Dropdown>
    )
}