import React from "react"; 
import styles from "./index.module.scss";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link'


const Footer = () => {
    return (
        <footer>
            <Container>
                <div className={styles.baseContainer}>
                    <div>
                        <Image src="/logo-mini-dark.svg" height={100} width={100} alt="logo"/> 
                    </div>
                    <div className={styles.linkContainers} >
                        <div className={styles.container}>
                            <p className={styles.title}>For users</p>
                            <Link href="/">
                                <a>
                                    SomeThing
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    SomeThing
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    SomeThing
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    SomeThing
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    SomeThing
                                </a>
                            </Link>
                        </div>
                        <div className={styles.container}>
                            <p className={styles.title}>For users</p>
                            <Link href="/">
                                <a>
                                    SomeThing
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    SomeThing
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    SomeThing
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    SomeThing
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    SomeThing
                                </a>
                            </Link>
                        </div>
                        <div className={styles.container}>
                            <p className={styles.title}>For users</p>
                            <Link href="/">
                                <a>
                                    SomeThing
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    SomeThing
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    SomeThing
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    SomeThing
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    SomeThing
                                </a>
                            </Link>
                        </div>

                    </div>
                    
                </div>
            </Container>
        </footer>      
    )
}

Footer.getInitialProps = async (ctx) => {
};

export default Footer; 
