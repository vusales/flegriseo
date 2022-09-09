import React from "react";
import styles from "./index.module.scss";
import { Grid , Container , Paper } from "@mui/material";
import CommonLayout from "../../layout/commonLayout";
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import InputMask from 'react-input-mask';
import Link from "next/link";


const Login = () => {
    return(
        <CommonLayout>
            <Container>
               <Paper elevation={2} className={styles.papper}>
               <form className={styles.inputBaseContainer}>
                    <Grid container spacing={2} p={3}>
                        <Grid item xs={12}>
                            <div className={styles.titleCon} >
                                <h1>Login</h1>
                                <div className={styles.line}></div>
                            </div>
                        </Grid>

                        <Grid item xs={12}>
                            <div className={styles.loginContainer}>
                                    <div className={styles.inputContainer}>
                                        <div className={styles.iconContainer}>
                                            <StayCurrentPortraitIcon />
                                        </div>

                                        <InputMask mask="(99)-999-99-99" 
                                        onChange={(e)=>{}}
                                        >
                                            {() => (
                                            <input
                                                placeholder="+994 |"
                                                id="number"
                                            />
                                            )}
                                        </InputMask>
                                    </div>

                                    <div className={styles.inputContainer}>
                                        <div className={styles.iconContainer}>
                                            <LockOpenIcon />
                                        </div>

                                        <input  
                                        type="text"
                                        placeholder="Password"
                                        />
                                    </div>
                            </div>
                        </Grid>  

                        <Grid item xs={12}>
                            <div className={styles.links}>
                                <Link href="/">
                                    <a  className={styles.bannerButton}>Forgot Password?</a>
                                </Link>
                                <Link href="/signUp">
                                    <a  className={styles.bannerButton}>Registration</a>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={styles.buttons}>
                                <button>Sign in</button>
                            </div>
                        </Grid>

                    </Grid>
                </form>
               </Paper>
            </Container>
        </CommonLayout>
    )
}


export default Login ; 