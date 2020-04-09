import React from 'react'
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core'


function DrawerContent({ title, side, content, open, onToggleDrawer, color }) {

    
    return(
        <Drawer anchor={side || "left"} open={open || false} onClose={() => onToggleDrawer()} >   
        <header className={"drawerHeader"} style={{backgroundColor: color || '#4b0152'}}>
            {title}
        </header>
        <List>
        {
            content.map((item, i) => (
                
                <ListItem button style={{fontFamily: 'Roboto'}} key={i} onClick={() => onToggleDrawer()}>
                    <ListItemText primary={item.name} style={{width: '90%'}} />
                </ListItem>
            ))
        }   
        </List>  
        </Drawer>
    )
}

export default DrawerContent