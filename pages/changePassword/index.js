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
import { changePasswordApi  } from "../../api/loginSignUp"; 
import PasswordValidation from "../../validation/passwordValidation";
import { useRouter } from 'next/router';


const initialState = {
    password: "" , 
    newpassword: "" , 
}

const reducer = (state , action) => {
    return {...state , ...action}
}

const ChangePassword = ({
    catalog,
}) => {
    const router = useRouter();
    const [alert , setAlert ] = useState({
        showAlert: false , 
        alertDescription: "" , 
        type: "" , 
    }); 
    const [ state , dispatch ] =  useReducer(reducer , initialState) ; 


    const changePassword = async () => {
        try {

            let valid =  await PasswordValidation.validate(state); 

            if(valid){
                if(state.password === state.newpassword) {
                    let body = {
                        email: router.query.email , 
                        password:state.password , 
                    }

                    await changePasswordApi(body).then((result) => {
                        if(result) {
                            setAlert({
                                showAlert: true , 
                                alertDescription: "Şifrəniz uğurla dəyişdirildi!" , 
                                type: "success" , 
                            }); 
                            router.push("/login");
                        }else {
                            setAlert({
                                showAlert: true , 
                                alertDescription: "Xəta baş verdi!" , 
                                type: "error" , 
                            }); 
                        }
                    }); 
                }
            }
        }catch(err) {
            console.log("err" , err);
        }
    }

    
    
return (
    <CommonLayout catalog={catalog}>
        <Alert
        message={alert.alertDescription}
        callback={(value)=>{setAlert({showAlert: value})}}
        type={alert.type}
        show={alert.showAlert}
        />
        <Container maxWidth="md">
        <Paper elevation={2} className={styles.papper}>
            <Grid container spacing={2} p={3}>
                <Grid item xs={12}>
                    <div className={styles.titleCon} >
                        <h1>Şifrəni dəyiş</h1>
                        <div className={styles.line}></div>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={styles.loginContainer}>
                        <div className={styles.inputContainer}>
                            <div className={styles.iconContainer}>
                                <LockOpenIcon />
                            </div>

                            <input  
                            type="text"
                            placeholder="New password"
                            value={state.password}
                            onChange={(e)=>{dispatch({password: e.target.value }) }}
                            />
                        </div>
                      
                        <div className={styles.inputContainer}>
                            <div className={styles.iconContainer}>
                                <LockOpenIcon />
                            </div>

                            <input  
                            type="text"
                            placeholder="Repeat new password"
                            value={state.newpassword}
                            onChange={(e)=>{dispatch({newpassword: e.target.value }) }}
                            />
                        </div>
                    </div>
                </Grid>  


                <Grid item xs={12}>
                    <div className={styles.buttons}>
                        <button 
                        onClick={()=>changePassword()}
                        >Şifrəni dəyiş</button>
                    </div>
                </Grid>
            </Grid>
        </Paper>
        </Container>
    </CommonLayout>
)};


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

export default ChangePassword;

