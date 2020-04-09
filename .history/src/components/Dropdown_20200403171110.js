import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default ({ label, content, }) => {
    
    const history = useHistory()

    const onOpen = el => {

        document.getElementById('subnav').style.display = 'block'

        if(el.path) {
            history.push(el.path)
        }else if(el.fnc) {
            el.fnc()
        }
    }

    return(
        <Dropdown className={'drop-toggle'}>
            <Dropdown.Toggle variant={'primary'}>
                {label}
            </Dropdown.Toggle>
            <Dropdown.Menu>
            {
                content.map((el, i) => (
                    <Dropdown.Item key={i} className={'drop-item'} 
                    onClick={() => onOpen(el)}>{el.name}</Dropdown.Item>
                ))
            }
            </Dropdown.Menu>
        </Dropdown>
    )
}