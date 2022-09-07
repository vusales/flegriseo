import React from "react";
import styles from "./index.module.scss";
import Paper from '@mui/material/Paper';
import GppGoodIcon from '@mui/icons-material/GppGood';



const OrderCheckout = () => {
    return(
        <Paper elevation={2} className={styles.papper} >
            <div className={styles.titleContainer} >
                <p>Checkout</p>
                <div>
                    <GppGoodIcon />
                    <p>100% guarantee</p>
                </div>
            </div>

            <div className={styles.checkoutBaseContainer}>
                <div className={styles.subTitlesCon}>
                    <div style={{width:"100%"}}>
                        <p className={styles.subTitle}>Video Views (standart holds)</p>
                    </div>
                </div>
                <div className={styles.subTitlesCon}>
                    <form style={{width:"100%"}} >
                        <div className={styles.bonusContainer}>
                            <p>Coupon:</p>      
                            <input  
                            />
                            <button>
                                Apply
                            </button>              
                        </div>
                    </form>
                </div>
                <div className={styles.subTitlesCon}>
                    <div className={styles.textCon}>
                        <p className={styles.subTitle}>Quantity:</p>
                        <p>1000</p>         
                    </div>
                </div>
                <div className={styles.subTitlesCon}>
                    <div className={styles.textCon}>
                        <p className={styles.subTitle}>Total cost:</p>
                        <p>4600 ₼</p>         
                    </div>
                </div>

                <div className={styles.warningCon}>
                    <p>Cashback for the purchase will be 1% (46 rubles)</p>
                </div>

                <div className={styles.totalPrice}>
                    <p>Total Paymant:</p>
                    <p>4600 ₼</p>
                </div>

                
            </div>
            <button className={styles.checkoutApply}>
                Checkout
            </button>
        </Paper>
    )
}


export default OrderCheckout ; 