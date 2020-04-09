import React from 'react'
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core'


function DrawerContent({ title, side, content, open, onToggleDrawer }) {

    
    return(
        <Drawer anchor={side || "left"} open={open || false} onClose={() => onToggleDrawer()} className={"drawer"}>   
        <header className={"drawerHeader"}>
            {title}
        </header>
        <List>
        {
            content.map((item, i) => (
                
                <ListItem button key={i} onClick={() => onToggleDrawer()}>
                    <ListItemText primary={item.name}  />
                </ListItem>
            ))
        }   
        </List>  
        </Drawer>
    )
}

export default DrawerContent