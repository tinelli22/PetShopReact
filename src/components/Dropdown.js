import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default ({ label, content, }) => {
    
    const history = useHistory()

    const onOpenSub = () => {
        const { style } = document.getElementById('subnav')
        style.display = style.display === 'none' ? 'block' : 'none'
    }

    const onPath = el => {
        if(el.path) {
            history.push(el.path)
        }else if(el.fnc) {
            el.fnc()
        }
    }

    return(
        <Dropdown className={'drop-toggle'} onClick={_ => onOpenSub()}>
            <Dropdown.Toggle variant={'primary'}>
                {label}
            </Dropdown.Toggle>
            <Dropdown.Menu>
            {
                content.map((el, i) => (
                    <Dropdown.Item key={i} className={'drop-item'} 
                    onClick={() => onPath(el)}>{el.name}</Dropdown.Item>
                ))
            }
            </Dropdown.Menu>
        </Dropdown>
    )
}