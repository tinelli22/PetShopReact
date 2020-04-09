import React from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'


function DrawerContent({ title, side, content, open, onToggleDrawer }) {

    return(
        <Drawer anchor={side || "left"} open={open} onClose={onToggleDrawer()}>
            <div className={"drawerHeader"}>

            </div>
        <List>
        {
            content.map((item, i) => (
                <ListItem>

                </ListItem>
            ))
        }   
        </List>  
        </Drawer>
    )
}

export default DrawerContent