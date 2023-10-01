import React, {useState} from "react"; 
import styles from "./index.module.scss";
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Image from "next/image";
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import Link from "next/link";
import { makeImageUrl } from "../../../utils/helper";
import CatalogButton from "../Catalog/CatalogButton";


const drawerWidth = 250 ;

const DrawerItem = ({catalog}) => {

    return (
        <div className={styles.drawerItemContainer} >
            <Image  src="/logo-dark.svg" width={100} height={50} alt="logo" />
            <div className={styles.linksContainer}>
                <Link href="/Filter">
                    <a className={styles.catalogLinks} >All services</a>
                </Link>
                <Link href="/CheapServices">
                    <a className={styles.catalogLinks} >Cheap services</a>
                </Link>
                <Link href="/UserChoice">
                    <a className={styles.catalogLinks} >User choice</a>
                </Link>
                <Link href="/SmmForBusiness">
                    <a className={styles.catalogLinks} >SMM for business</a>
                </Link>
                <Link href="/BigBrands">
                    <a className={styles.catalogLinks} >Big brands</a>
                </Link>
                <Link href="/LikeForSubscriptions">
                    <a className={styles.subHeaderButton} >Like subscription</a>
                </Link>
            </div>
            <div>
                <div className={styles.categoryTitle}>Service categories</div>
                {
                    catalog?.map((catalog ,  index)=>{
                        console.log("catalog" ,  catalog );
                    return (
                        // <div key={index} className={styles.categoryLinksContainer} >
                        //     {catalog.icon}
                        //     {
                        //         catalog.icon ? 
                        //         <Image src={makeImageUrl(catalog.icon)} width={120} height={120} />
                        //         :
                        //         <Image src="/noimg.svg" width={120} height={120} />
                        //     }
                        //     <Link href="/productDetails">
                        //         <a className={styles.catalogLinks} >{catalog.categoryName}</a>
                        //     </Link>
                        // </div>
                        <CatalogButton
                        key={index}
                        data={catalog} 
                        hideHoveredElement={true}

                        />
                    )}
                )}
            </div>
        </div>
    )
}

const DrawerComponent = ({catalog}) => {
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
                <DrawerItem catalog={catalog} />
            </Drawer>
        </div>
    )
}


export default DrawerComponent;