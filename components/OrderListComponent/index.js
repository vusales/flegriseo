import React from "react"
import styles from "./index.module.scss";
import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { DesktopTablet ,  Mobile } from "../../ui/Breakpoints";


const OrderListComponent = () => {
    return (
        <Grid item xs={12}>
            <DesktopTablet>
                <Grid container className={styles.titleContainer} p={2}>
                    {/* <div className={styles.titleContainer}> */}
                        <Grid item xs={6}><p className={styles.td}>Name</p></Grid>
                        <Grid item xs={4} ><p className={styles.td}>Qty</p></Grid>
                        <Grid item xs={2} ><p className={styles.td}>Price</p></Grid>
                    {/* </div> */}
                </Grid>
            </DesktopTablet>
            

            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <div className={styles.listItemContainer}>
                        <Image src="/cardImg.png" width={50} height={50} alt="product details"/>
                        <Link href="/productDetails">
                            <a className={styles.productName}> Video Views (Standard Hold) </a>
                        </Link>
                    </div>
                </Grid>
                <Mobile>
                    <Grid item xs={12} mt={1}>
                        <p className={styles.titles}>Quality</p>     
                    </Grid>
                </Mobile>
                <Grid item xs={12} sm={12} md={4} >
                    <div className={styles.listItemContainer}>
                        <div className={styles.addRemoveContainer}>
                            <button> <RemoveIcon/> </button>
                            <div>
                                <p>3750</p>
                                <p>like</p>
                            </div>
                            <button> <AddIcon/> </button>
                        </div>
                    </div>
                </Grid>
                <Mobile>
                    <Grid item xs={12} mt={1}>
                        <p className={styles.titles}>Price</p>     
                    </Grid>
                </Mobile>
                <Grid item  xs={12} sm={12} md={2} >
                    <div className={styles.listItemContainer}>
                        <p className={styles.price}>14260 ₼</p>
                    </div>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default OrderListComponent ;

