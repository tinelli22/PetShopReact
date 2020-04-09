import React from 'react'
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core'


function DrawerContent({ side, content, open, onToggleDrawer }) {

    return(
        <Drawer anchor={side || "left"} open={open} onClose={onToggleDrawer()} className={"drawer"}>   
        <List>
        {
            content.map((item, i) => (
                <ListItem button key={i}>
                    <ListItemText primary={item}  />
                </ListItem>
            ))
        }   
        </List>  
        </Drawer>
    )
}

export default DrawerContent