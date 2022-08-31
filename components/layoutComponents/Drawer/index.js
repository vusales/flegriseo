import React, {useState} from "react"; 
import styles from "./index.module.scss";
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';

const DrawerComponent = () => {
    const [openDrawer , setOpenDrawer ] =  useState(false); 

    return (
        <div>
            <button
            className={styles.menuDrawerButton}
            onClick={()=>setOpenDrawer(!openDrawer)}
            >
                <MenuIcon/>
            </button>

            <Drawer
            className={styles.drawer}
            variant="temporary"
            anchor="left"
            open={openDrawer}
            onClose={()=>setOpenDrawer(false)}
            >
                <div>hello i am drwaer</div>
            </Drawer>
        </div>
    )
}


export default DrawerComponent;