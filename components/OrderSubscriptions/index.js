import React from "react"
import styles from "./index.module.scss";
import { Grid , Checkbox } from "@mui/material";
import SingleSubscription from "../SingleSubscription";

const label = { inputProps: { 'aria-label': 'Agreement' } }


const OrderSubscriptions  = () => {

    return (
        <Grid item xs={12}> 
            <Grid container >
                <Grid item xs={12} p={2} mb={2} className={styles.border}>
                    <p>SUBSCRIPTION</p>
                </Grid>
                <Grid item xs={3}>
                    <SingleSubscription />
                </Grid>
                <Grid item xs={12} pb={2} pt={2}>
                    <div className={styles.agreementCon}> 
                        <Checkbox 
                        className={styles.checkbox}
                        {...label} 
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                        />
                        <p>I agree to the Subscription Recurring Payment Rules and Automatic Charge Rules</p>
                    </div>
                </Grid>
            </Grid> 
        </Grid>
    )
}

export default OrderSubscriptions;