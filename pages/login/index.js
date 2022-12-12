import React ,  {
    useReducer , 
    useRef, 
    useState  , 
    useEffect 
} from "react";
import styles from "./index.module.scss";
import { Grid , Container , Paper , Input  } from "@mui/material";
import CommonLayout from "../../layout/commonLayout";
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import InputMask from 'react-input-mask';
import Link from "next/link";
import loginValidation from "../../validation/loginValidation";
import Alert from "../../ui/Alert";
import { getCatalogData } from "../../api/catalogContent";
import {login , getAuthToken , signOut  } from "../../api/loginSignUp"; 


const initialState ={ 
    phone: "",
    password: "" , 
}


function reducer (state , action ){
    return { ...state , ...action};
}


const Login = ({catalog}) => {
    const [state  , dispatch ] = useReducer( reducer  , initialState ) ; 
    const [authToken , setAuthToken ] = useState("") ;  
    const [alert , setAlert ] = useState({
        showAlert: false , 
        alertDescription: "" , 
        type: "" , 
    });  

    useEffect(()=> {
       isUserLogedIn() ; 
    }, [authToken]); 

    const isUserLogedIn = async () => {
        await  getAuthToken().then(token=>{
            if(token){
                setAuthToken(token);
            }else{
                return; 
            }
        }).catch((err)=> console.log("getToken error" ,  err )); 
    }

    const signIn = async () => {
        try{
            console.log("SIGNIN");
            let isValid = await loginValidation.validate(state);
            if (isValid) {
                // login 
                const result =  await login(state); 
                console.log("result" ,  result ) ; 
                setAuthToken(result.auth_token); 
            }else {
                console.log("Error");
                setAlert({
                    showAlert: true , 
                    alertDescription: "error" , 
                    type: "error" , 
                }); 
            }
        }catch (error){
            console.log("VALIDATION ERR" ,  {error});
            setAlert({
                showAlert: true , 
                alertDescription: error , 
                type: "error" , 
            }); 
        }
    }

    const logOut = async () => {
        try {
            let body = {
                token : authToken , 
            }
            signOut(body).then((result) => {
                if(result) {
                    console.log("SIGNOUT THEN");
                    setAuthToken(""); 
                }
            }); 
        }catch(err) {
            console.log("err" , err);
        }
    }


    return(
        <CommonLayout catalog={catalog}>
            <Alert
            message={alert.alertDescription}
            callback={(value)=>{setAlert({showAlert: value})}}
            type={alert.type}
            show={alert.showAlert}
            />
            <Container maxWidth="md">
               <Paper elevation={2} className={styles.papper}>
                {
                    authToken ? 
                        <>
                            <Grid item xs={12}>
                                <div className={styles.buttons}>
                                    <p>Siz login Olmusunuz!</p>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={styles.buttons}>
                                    <button 
                                    onClick={()=>logOut()}
                                    >Çıxış edin</button>
                                </div>
                            </Grid>
                        </>
                    :
                    // <form className={styles.inputBaseContainer}>
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

                                        <InputMask 
                                        mask="99-999-99-99" 
                                        value={state.phone}
                                        onChange={(event)=>{
                                            let value = event.target.value.trim().split("-");
                                            let filteredString = value.filter((item)=> /\S/.test(item));
                                            let result = filteredString.join('');
                                            dispatch({phone: result }) ;
                                        }}
                                        >
                                            {(inputProps) => (
                                            <input
                                                {...inputProps}
                                                type="tel" 
                                                name="tel" 
                                                id="tel" 
                                                placeholder="+994 |" 
                                                required
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
                                        value={state.password}
                                        onChange={(e)=>{dispatch({password: e.target.value }) }}
                                        />
                                    </div>
                                </div>
                            </Grid>  

                            <Grid item xs={12}>
                                <div className={styles.links}>
                                    <Link href="/checkEmail">
                                        <a  className={styles.bannerButton}>Forgot Password?</a>
                                    </Link>
                                    <Link href="/signUp">
                                        <a  className={styles.bannerButton}>Registration</a>
                                    </Link>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={styles.buttons}>
                                    <button 
                                    onClick={()=>signIn()}
                                    >Sign in</button>
                                </div>
                            </Grid>
                        </Grid>
                    // </form> 
                }
               
               </Paper>
            </Container>
        </CommonLayout>
    )
}

export const getStaticProps = async (context) => {

    // this request have to be each page 
    const catalogData =  await getCatalogData() ; 
    const catalog =  catalogData.data ;
    // *********************** 
  
    return {
      props : {
        catalog , 
      } 
    }
}


export default Login ; 