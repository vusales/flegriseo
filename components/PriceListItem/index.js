import React from "react";
import styles from "./index.module.scss";
import { Grid , Container} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Mobile , TabletMobile } from "../../ui/Breakpoints";



const PriceListItem = () => {
    return(
        <Grid item xs={12} justifyContent="center" alignItems="center">
            <Grid container spacing={2}  pt={2} pb={2} className={styles.itemContainer}>
                <Grid item xs={12} sm={5} md={5} className={styles.item} pl={0} pt={0}>
                    <div className={styles.serviceContainer}>
                        <Image src="/cardImg.png" width={30} height={30} alt="price image" />  
                        <Link href="/order" >
                            <a className={styles.linkTitle}>Installing the application on Android (standard)</a>
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3} md={3}  className={styles.item} pl={0} pt={0}>
                    <div className={styles.priceContainer}>
                        <Mobile>
                            <p className={styles.titles} >Price</p>
                        </Mobile>
                        <p>19.20 rub. for 1 installation</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={1} md={1} justifyContent="center" alignItems="center"  className={styles.item} pl={0} pt={0}>
                    <div className={styles.container}>
                        <Mobile>
                            <p className={styles.titles} >Minimum</p>
                        </Mobile>
                        <p>fifty</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={1} md={1} justifyContent="center" alignItems="center"  className={styles.item} pl={0} pt={0} >
                    <div className={styles.container}>
                        <Mobile>
                            <p className={styles.titles} >Maximum</p>
                        </Mobile>
                        <p>125 000</p>
                    </div>
                </Grid>
                <Grid item xs={12}  sm={2} md={2} justifyContent="center" alignItems="center"  className={styles.item} pl={0} pt={0}>
                    <div className={styles.container}>
                        <Link href="/order" >
                            <a className={styles.linkbutton}>Checkout</a>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default PriceListItem ; 