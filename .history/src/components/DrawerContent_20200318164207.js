import React from 'react'
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core'
import { useHistory } from 'react-router-dom'


function DrawerContent({ title, side, content, open, onToggleDrawer, color }) {
    const history = useHistory()

    const toOtherPage = path => {
        history.push(path)
        onToggleDrawer()
    }
    
    return(
        <Drawer anchor={side || "left"} open={open || false} onClose={() => onToggleDrawer()} >   
        <header className={"drawerHeader"} style={{backgroundColor: color || '#4b0152'}}>
            {title}
        </header>
        <List>
        {
            content.map((item, i) => (
                
                <ListItem button style={{fontFamily: 'Roboto'}} key={i} onClick={() => toOtherPage(item.path)}>
                    <ListItemText primary={item.name} />
                </ListItem>
            ))
        }   
        </List>  
        </Drawer>
    )
}

export default DrawerContent