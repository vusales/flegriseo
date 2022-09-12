import React , {useReducer} from "react";
import styles from "./index.module.scss";
import { Grid , Container , Paper } from "@mui/material";
import CommonLayout from "../../layout/commonLayout";
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonIcon from '@mui/icons-material/Person';
import InputMask from 'react-input-mask';
import Link from "next/link";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import RegistrationValidation from "../../validation/registrationValidator";

const initialState ={ 
    name: "",
    surname:"", 
    email: "", 
    phone:"", 
    password: "" , 
    repeatPassword:"",
}


function reducer (state , action ){
    return { ...state , ...action};
}



const SignUp = () => {
    const [state  , dispatch ] = useReducer( reducer  , initialState ) ;  

    console.log("state" , state ); 

    const signUp = async () => {
        try{
            const isValid =  await RegistrationValidation.validate(state) ; 

            if(isValid){
                console.log("OK");

            }
        }
        catch(error) {
            console.log("error" , error ); 
        }
    }


    return(
        <CommonLayout>
            <Container>
               <Paper elevation={2} className={styles.papper}>
               <form className={styles.inputBaseContainer}>
                    <Grid container spacing={2} p={3}>
                        <Grid item xs={12}>
                            <div className={styles.titleCon} >
                                <h1>Registration</h1>
                                <div className={styles.line}></div>
                            </div>
                        </Grid>

                        <Grid item xs={12}>
                            <div className={styles.loginContainer}>
                                    <div className={styles.inputContainer}>
                                        <div className={styles.iconContainer}>
                                            <PersonIcon />
                                        </div>

                                        <input  
                                        type="text"
                                        placeholder="name"
                                        value={state.name}
                                        onChange={(e)=>dispatch({name:e.target.value})}
                                        />
                                    </div>
                                    <div className={styles.inputContainer}>
                                        <div className={styles.iconContainer}>
                                            <PersonIcon />
                                        </div>

                                        <input  
                                        type="text"
                                        placeholder="surname"
                                        value={state.surname}
                                        onChange={(e)=>dispatch({surname:e.target.value})}
                                        />
                                    </div>
                                    <div className={styles.inputContainer}>
                                        <div className={styles.iconContainer}>
                                            <AlternateEmailIcon />
                                        </div>

                                        <input  
                                        type="email"
                                        placeholder="email"
                                        value={state.email}
                                        onChange={(e)=>dispatch({email:e.target.value})}
                                        />
                                    </div>

                                    <div className={styles.inputContainer}>
                                        <div className={styles.iconContainer}>
                                            <StayCurrentPortraitIcon />
                                        </div>

                                        <InputMask 
                                        mask="(99)-999-99-99" 
                                        value={state.phone}
                                        onChange={(e)=>dispatch({phone:e.target.value})}
                                        >
                                            {() => (
                                            <input
                                                placeholder="phone"
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
                                        placeholder="password"
                                        value={state.password}
                                        onChange={(e)=>dispatch({password:e.target.value})}
                                        />
                                    </div>

                                    
                                    <div className={styles.inputContainer}>
                                        <div className={styles.iconContainer}>
                                            <LockOpenIcon />
                                        </div>

                                        <input  
                                        type="text"
                                        placeholder="password again"
                                        value={state.repeatPassword}
                                        onChange={(e)=>dispatch({repeatPassword:e.target.value})}
                                        />
                                    </div>
                            </div>
                        </Grid>  

                        <Grid item xs={12}>
                            <div className={styles.links}>
                                {/* <Link href="/">
                                    <a  className={styles.bannerButton}>Forgot Password?</a>
                                </Link> */}
                                <Link href="/login">
                                    <a  className={styles.bannerButton}>Login</a>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={styles.buttons}>
                                <button
                                onClick={()=>signUp()}
                                >Sign up</button>
                            </div>
                        </Grid>
                    </Grid>
                </form>
               </Paper>
            </Container>
        </CommonLayout>
    )
}


export default SignUp; 