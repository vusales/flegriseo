import React from "react";
import styles from "./index.module.scss";
import { Grid , Container , Paper } from "@mui/material";
import CommonLayout from "../../layout/commonLayout";
import OrderListComponent from "../../components/OrderListComponent";
import OrderCheckoutComponent from "../../components/OrderCheckoutComponent";
import OrderSubscriptions from "../../components/OrderSubscriptions";
import SelectPaymantMethod from "../../components/SelectPaymantMethod";
import OrderCheckout from "../../components/OrderCheckout";

const Order = () => {
    return (
        <CommonLayout>
            <Container>
                <Paper elevation={2} className={styles.paper }>
                    <Grid container spacing={2} >
                        <OrderListComponent />
                        <OrderCheckoutComponent />
                        <OrderSubscriptions />                     
                    </Grid>
                </Paper>
            </Container>
            <Container>
                <Grid container spacing={2}>
                    {/* paymant card selection */}
                    <Grid item xs={12} sm={12} md={7}>
                        <SelectPaymantMethod/>
                    </Grid>
                    {/* checkput */}
                    <Grid item xs={12} sm={12} md={5}>
                        <OrderCheckout
                        />
                    </Grid>
                </Grid>
            </Container>
        </CommonLayout>
    )
}

export default Order ;
