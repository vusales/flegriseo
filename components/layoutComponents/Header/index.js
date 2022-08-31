import React, {useState} from "react"; 
import styles from "./index.module.scss";
import Image from 'next/image';
import WindowIcon from '@mui/icons-material/Window';
import { Button } from "@mui/material";
import Search from "../Search";
import InputIcon from '@mui/icons-material/Input';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Subheader from "../SubHeader";
import Navbar from "../Navbar";

const Header = () => {
    const [openLogin , setOpenLogin] = useState(false); 

    return (
        <>
        <Navbar/>
        <Container minWidth="sm" >
            <header>
                <div className={styles.baseContainer}>
                    <div className={styles.headerContainer}>
                        <Image src="/logo-dark.svg" width="170" height="50" alt="logo" />
                        <button 
                        type="submit"
                        className={styles.customButton} >
                            <WindowIcon/>
                            Catalog
                        </button>
                        <Search/>
                    </div>
                    <div
                    className={styles.loginButtonContainer}
                    >
                        <button 
                        className={styles.loginButton}
                        onClick={()=>setOpenLogin(!openLogin)}
                        >
                            <InputIcon/>
                            Log in
                            <ExpandMoreIcon/>
                        </button>

                        {
                            openLogin ?
                            <div
                            className={styles.smallModal}
                            >
                                <Link href="#">
                                    <a className={styles.loginsignupLinks}>
                                        <AccountBoxIcon/>
                                        Log in
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className={styles.loginsignupLinks}>
                                        <AppRegistrationIcon/>
                                        Sign up
                                    </a>
                                </Link>
                            </div>
                            :null
                        }
                    </div>
                </div> 
                <Subheader/> 
            </header>
        </Container>
        </>
        
    )
}


Header.getInitialProps = async (ctx) => {
};

export default Header; 


