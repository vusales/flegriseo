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
import MailIcon from '@mui/icons-material/Mail';
import InputMask from 'react-input-mask';
import Link from "next/link";
import loginValidation from "../../validation/loginValidation";
import Alert from "../../ui/Alert";
import { getCatalogData } from "../../api/catalogContent";
import {login , getAuthToken , signOut , checkEmailApi } from "../../api/loginSignUp"; 
import { useRouter } from 'next/router';

const CheckEmail = ({
    catalog,
}) => {

    const [alert , setAlert ] = useState({
        showAlert: false , 
        alertDescription: "" , 
        type: "" , 
    }); 
    const [email , setEmail ] = useState(""); 
    const router = useRouter(); 

    const checkEmail =  async () => {
        try {
            if(!email) return  setAlert({
                showAlert: true , 
                alertDescription: "Email daxil edilməyib!" , 
                type: "error" , 
            }); 
            
            let body  = {
                "email" : email 
            }

            await checkEmailApi(body).then((result) => {
                if(result){
                    router.push(
                        {
                            pathname: "/VerifyCode",
                            query: { email: email },
                        }); 
                }else {
                    setAlert({
                        showAlert: true , 
                        alertDescription: "Xəta baş verdi!" , 
                        type: "error" , 
                    }); 
                }
            }); 

        }
        catch(err) {
            setAlert({
                showAlert: true , 
                alertDescription: err , 
                type: "error" , 
            });  
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
                        <h1>Qeydiyyatdan keçdiyiniz emailinizi daxil edin</h1>
                        <div className={styles.line}></div>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={styles.loginContainer}>
                        <div className={styles.inputContainer}>
                            <div className={styles.iconContainer}>
                                <MailIcon />
                            </div>

                            <input  
                            type="email"
                            pattern="user@mail.ru"
                            placeholder="Email"
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            required={true}
                            />
                        </div>
                    </div>
                </Grid>  

                <Grid item xs={12}>
                    <div className={styles.buttons}>
                        <button 
                        onClick={()=>checkEmail()}
                        >Emaili təsdiq et</button>
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

export default CheckEmail;
