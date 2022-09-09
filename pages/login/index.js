import React from "react";
import styles from "./index.module.scss";
import { Grid , Container , Paper } from "@mui/material";
import CommonLayout from "../../layout/commonLayout";
import OrderListComponent from "../../components/OrderListComponent";
import OrderCheckoutComponent from "../../components/OrderCheckoutComponent";
import OrderSubscriptions from "../../components/OrderSubscriptions";
import SelectPaymantMethod from "../../components/SelectPaymantMethod";
import OrderCheckout from "../../components/OrderCheckout";


const Login = () => {
    return(
        <CommonLayout>
            <Container>
            Login

            </Container>
        </CommonLayout>
    )
}


export default Login ; 