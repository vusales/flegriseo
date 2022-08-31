import React, {useState} from "react"; 
import styles from "./index.module.scss";
import Container from '@mui/material/Container';



const Navbar = () => {

    return(
        <div className={styles.baseContainer}>
            <Container>
                <nav>
                    <div className={styles.navbarContainer}>
                        <div className={styles.navbarUl}>
                            <div><a href="#">Telegram bot</a></div>
                            <div><a href="#">Андроид приложение</a></div>
                            <div><a href="#">Партнерская программа</a></div>
                            <div><a href="#">Помощь</a></div>
                        </div>
                    </div>
                </nav>
            </Container>
        </div>
    )

}

export default Navbar ;