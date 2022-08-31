import React, {useState} from "react"; 
import styles from "./index.module.scss";
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Image from "next/image";

const drawerWidth = 250 ;

const DrawerItem = () => {
    return (
        <div className={styles.drawerItemContainer} >
            <Image  src="/logo-dark.svg" width={100} height={50} alt="logo" />
        </div>
    )
}

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
            sx={{
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
                <DrawerItem/>
            </Drawer>
        </div>
    )
}


export default DrawerComponent;