import React from 'react'
import { useHistory } from 'react-router-dom'

function SubNavBar({ content }) {

    const history = useHistory()

    const onGoTo = el => {
        if(el.path) {
            history.push(el.path)
        } else if(el.fnc) {
            el.fnc()
        }

        const { style } = document.getElementById('subnav')
        style.display = style.display === 'block' ? 'none' : 'block'
    }

    return(
        <nav  id={'subnav'}>
            {
                content.map((el,i) => (
                <span id={'subitem'} key={i} onClick={_ => onGoTo(el)}>{el.name}</span>
                ))
            }
        </nav>
    )
}

export default SubNavBar