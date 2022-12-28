import React, {
    useEffect , 
    useReducer , 
    useState ,
} from "react";
import styles from "./index.module.scss";
import { Grid , Container , Paper } from "@mui/material";
import CommonLayout from "../../layout/commonLayout";
import OrderListComponent from "../../components/OrderListComponent";
import OrderCheckoutComponent from "../../components/OrderCheckoutComponent";
import OrderSubscriptions from "../../components/OrderSubscriptions";
import SelectPaymantMethod from "../../components/SelectPaymantMethod";
import OrderCheckout from "../../components/OrderCheckout";
import { getCatalogData } from "../../api/catalogContent";
import { useRouter } from "next/router";
import { getAuthToken } from "../../api/loginSignUp";
import OrderValidator from "../../validation/orderValidation";
import Alert from "../../ui/Alert"; 
import { orderApi } from "../../api/order";

const initialValues  =  {
    url_link: "" , 
    quantity: "" , 
    price: "" , 
    email: "",
    phone: "",
    service_name: "" , 
    subscription_period: "" , 
    agreement: false , 
    image: "" , 
}

const reducer = (state , action) => {
    return {...state , ...action}
}

const Order = ({catalog}) => {
    const router =  useRouter (); 
    const [ state , dispatch ] =  useReducer( reducer , initialValues ); 
    const [alert , setAlert ] = useState({
        showAlert: false , 
        alertDescription: "" , 
        type: "" , 
    }); 
    const { price , serviceAmount , serviceName , title , image } = router.query ; 

    useEffect(()=>{
        dispatch({
            quantity: serviceAmount , 
            price: price , 
            service_name: serviceName , 
            image : image , 
        }); 
    } , []); 

    const completeOrder = async () => {
        try {
            let token =  await getAuthToken(); 
            let body = {
                "token": token ,
                ...state , 
            }
            const isValid =  OrderValidator.validate(body); 
            if(state.agreement){
                if(isValid){
                    await orderApi(body).then((result)=>{
                        if(result){
                            setAlert({
                                showAlert: true , 
                                alertDescription: "Sifariniz təsdiqləndi!" , 
                                type: "success" , 
                            });
                            setTimeout(() => {
                                router.push({
                                    pathname: '/'
                                });   
                            }, 1000);
                        }
                    }).catch((err)=>{
                        setAlert({
                            showAlert: true , 
                            alertDescription: err , 
                            type: "error" , 
                        });
                    }); 
                }
            }else {
                setAlert({
                    showAlert: true , 
                    alertDescription: "Odəniş qaydaları ilə razılaşmadığınız üçün sifariş qəbul edilmir!" , 
                    type: "error" , 
                }); 
            }
        } catch (error) {
            if(error) {
                setAlert({
                    showAlert: true , 
                    alertDescription: error , 
                    type: "error" , 
                }); 
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
            <Container>
                <Paper elevation={2} className={styles.paper }>
                    <Grid container spacing={2} >
                        <OrderListComponent 
                        name={title}
                        qty = {{
                            serviceName , 
                            serviceAmount , 
                        }}
                        price={price}
                        image={image}
                        />
                        <OrderCheckoutComponent 
                        states={state}
                        callBackFunction={(value)=>dispatch(value)}
                        />
                        <OrderSubscriptions 
                        callBackFunction={(value)=>dispatch(value)}
                        />
                        <Grid item xs={12}>
                            <div 
                            className={styles.orderButtonContainer}
                            >
                                <button 
                                onClick={()=>completeOrder()}
                                className={styles.checkoutApply}
                                >
                                    Order
                                </button>
                            </div>
                        </Grid>                     
                    </Grid>
                </Paper>
            </Container>
            {/*  card selections ,  checkout  , coupon , total quantiity are below commented */}
            {/* <Container>
                <Grid container spacing={2}> */}
                    {/* paymant card selection */}
                    {/* <Grid item xs={12} sm={12} md={7}>
                        <SelectPaymantMethod/>
                    </Grid> */}
                    {/* checkput */}
                    {/* <Grid item xs={12} sm={12} md={5}>
                        <OrderCheckout
                        />
                    </Grid>
                </Grid>
            </Container> */}
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

export default Order ;
