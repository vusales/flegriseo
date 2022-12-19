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
import {login , getAuthToken , signOut , verifyCodeApi ,   } from "../../api/loginSignUp"; 
import { useRouter } from 'next/router';


// code inputs 
const initialCodes={
    first:"",
    second:"",
    third:"",
    forth:"",
}
  
const codeReducer = (state , action) => {
    return {...state , ...action}
}

const checkEmail = ({
    catalog,
}) => {
    const router = useRouter();
    const [codeState, codeDispatch] = useReducer(codeReducer, initialCodes);
    const [alert , setAlert ] = useState({
        showAlert: false , 
        alertDescription: "" , 
        type: "" , 
    }); 

    const [ email , setEmail ] = useState("");

    useEffect(()=>{
        setEmail(router?.query?.email); 
        if(router?.query?.email){
            setAlert({
                showAlert: true , 
                alertDescription: "Emailinizə göndərilən 4 rəqəmli kodu daxil edin!" , 
                type: "warning" , 
            }); 
        }

    } , []) ; 


    const verfyNumber = async () => {
        try{
            const body  = {
                email: email , 
                code: `${codeState.first}${codeState.second}${codeState.third}${codeState.forth}` , 
            }
            await verifyCodeApi(body).then((result)=>{
                if(result) {
                    router.push({
                        pathname: "/changePassword",
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
        catch(error){
            console.log("error" , {error});
        }
    }

    // for to focus code inputs
    const handleChange = e => {
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");
        // Check if they hit the max character length
        if (value.length >= maxLength) {
        // Check if it's not the last input field
        if (parseInt(fieldIndex, 10) < 4) {
            // Get the next input field
            const nextSibling = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
            );
            // If found, focus the next field
            if (nextSibling !== null) {
            nextSibling.focus();
            }
        }
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
                        <h1>Təsdiqləmə kodunu daxil edin</h1>
                        <div className={styles.line}></div>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={styles.loginContainer}>
                        <div className={styles.passwordCodePageInputContainer}>
                            <input maxLength={1} type="text" name="ssn-1" onChange={(e)=>{
                            codeDispatch({first: e.target.value});
                            handleChange(e);
                            }}/>
                            <input maxLength={1} type="text" name="ssn-2" onChange={(e)=>{
                            codeDispatch({second: e.target.value});
                            handleChange(e);
                            }}/>
                            <input maxLength={1} type="text" name="ssn-3" onChange={(e)=>{
                            codeDispatch({third: e.target.value});
                            handleChange(e);
                            }}/>
                            <input maxLength={1} type="text" name="ssn-4" onChange={(e)=>{
                            codeDispatch({forth: e.target.value});
                            handleChange(e);
                            }}/>
                        </div>
                    </div>
                </Grid>  

                <Grid item xs={12}>
                    <div className={styles.buttons}>
                        <button 
                        onClick={()=>verfyNumber()}
                        >Təsdiqləmə kodunu göndər</button>
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

export default checkEmail;
