import React, {useState} from "react"; 
import styles from "./index.module.scss";
import Image from 'next/image';
import WindowIcon from '@mui/icons-material/Window';
import Search from "../Search";
import InputIcon from '@mui/icons-material/Input';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Subheader from "../SubHeader";
import Navbar from "../Navbar";
import Catalog from "../Catalog"; 
import {Desktop , TabletMobile , Mobile ,  DesktopTablet} from "../../../ui/Breakpoints" ; 
import DrawerComponent from "../Drawer";


const Header = ({catalog}) => {
    const [openLogin , setOpenLogin] = useState(false); 

    return (
        <>
        <DesktopTablet>
            <Navbar/>
        </DesktopTablet>
        <Container >
            <header>
                <div className={styles.baseContainer}>
                    <div className={styles.headerContainer}>
                        <Desktop>
                            <Link href="/">
                                <a>
                                    <Image src="/logo-dark.svg" width="170" height="50" alt="logo" />
                                </a>
                            </Link>
                        </Desktop>
                        <TabletMobile>
                            <Link href="/">
                                <a>
                                    <Image src="/logo-mini-dark.svg" width="50" height="50" alt="logo" />
                                </a>
                            </Link>
                        </TabletMobile>

                        <Desktop>
                            <button 
                            type="submit"
                            className={styles.customButton} 
                            >
                                <WindowIcon/>
                                Catalog
                                <div className={styles.showCatalog}>
                                    <Catalog catalog={catalog} />
                                </div>
                            </button>
                        </Desktop>

                        <DesktopTablet>
                            <Search/>
                        </DesktopTablet>
                    </div>
                    <div
                    className={styles.loginButtonContainer}
                    >
                        <button 
                        className={styles.loginButton}
                        onClick={()=>setOpenLogin(!openLogin)}
                        >
                            <InputIcon/>
                            <Desktop>
                                Log in
                                <ExpandMoreIcon/>
                            </Desktop>
                        </button>
                        {
                            openLogin ?
                            <div
                            className={styles.smallModal}
                            >
                                <Link href="/Login">
                                    <a className={styles.loginsignupLinks}>
                                        <AccountBoxIcon/>
                                        Log in
                                    </a>
                                </Link>
                                <Link href="/SignUp">
                                    <a className={styles.loginsignupLinks}>
                                        <AppRegistrationIcon/>
                                        Sign up
                                    </a>
                                </Link>
                            </div>
                            :null
                        }
                    </div>
                    <Mobile>
                        <DrawerComponent catalog={catalog} />
                    </Mobile>
                </div> 
                <DesktopTablet>
                    <Subheader/> 
                </DesktopTablet>



                <Mobile>
                    <div className={styles.mobileSearch} >
                        <Search 
                        containerStyle={{
                            width: "100%" ,
                            backGroundColor: "red" ,
                        }}
                        />
                    </div>
                </Mobile>
                

                

            </header>
        </Container>
        </>
        
    )
}

export default Header; 


