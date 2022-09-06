import react from "react"
import styles from "./index.module.scss";
import { Grid , Container , Paper } from "@mui/material";
import CommonLayout from "../../layout/commonLayout";
import OrderListComponent from "../../components/OrderListComponent";
import OrderCheckoutComponent from "../../components/OrderCheckoutComponent";

const Order = () => {
    return (
        <CommonLayout>
            <Container>
                <Paper elevation={2} className={styles.paper }>
                    <Grid container spacing={2} >
                        <OrderListComponent />
                        <OrderCheckoutComponent />
                    </Grid>
                </Paper>
            </Container>
        </CommonLayout>
    )
}

export default Order ;
