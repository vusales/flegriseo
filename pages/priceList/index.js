import React from "react";
import styles from "./index.module.scss";
import { Grid , Container} from "@mui/material";
import CommonLayout from "../../layout/commonLayout";
import Link from "next/link";
import {Paper} from "@mui/material";
import Image from "next/image";
import { DesktopTablet , Desktop } from "../../ui/Breakpoints";
import PriceListItem from "../../components/PriceListItem";


const PriceList = () => {
    return(
        <CommonLayout>
            <Container>
                <Paper elevation={2} className={styles.papper}>
                    <Grid container justifyContent="center" alignItems="center" >
                        <Grid item xs={12} md={12} >
                            <div className={styles.titleCon} >
                                <h1>LIST OF ALL SERVICES AND PRICES FOR SMM</h1>
                                <div className={styles.line}></div>
                            </div>
                        </Grid>
                        <DesktopTablet>
                            <Grid item xs={12}  justifyContent="center" alignItems="center" >
                                <Grid container spacing={2} className={styles.taleTitle} mt={2} pt={1} pb={2}>
                                    <Grid item xs={12} sm={5} md={5}><div className={styles.titleitemContainer} ><p>Service</p></div></Grid>
                                    <Grid item xs={12} sm={3}  md={3} > <div className={styles.titleitemContainer} ><p>Price</p></div></Grid>
                                    <Grid item xs={12} sm={1} md={1} justifyContent="center" alignItems="center"> <div className={styles.titleitemContainerSmall} ><p>Minimum</p></div></Grid>
                                    <Grid item xs={12} sm={1}  md={1} justifyContent="center" alignItems="center"> <div className={styles.titleitemContainerSmall} ><p>Maximum</p></div></Grid>
                                    <Grid item xs={12} sm={2} md={2} justifyContent="center" alignItems="center" > <div className={styles.titleitemContainerSmall} ><p>Order</p></div></Grid>
                                </Grid>
                            </Grid>
                        </DesktopTablet>
                        
                        <PriceListItem />
                        <PriceListItem />
                       
                    </Grid>
                </Paper>  
            </Container>
        </CommonLayout>
    )
}


export default PriceList ; 