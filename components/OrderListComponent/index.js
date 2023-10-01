import React from "react"
import styles from "./index.module.scss";
import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { DesktopTablet ,  Mobile } from "../../ui/Breakpoints";
import { makeImageUrl } from "../../utils/helper";


const OrderListComponent = ({ name , qty , price ,  image }) => {
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
                        {
                            image ? 
                            <Image src={makeImageUrl(image)} width={50} height={50} alt="product details" />
                            :null
                        }
                        <Link href="/ProductDetails">
                            <a className={styles.productName}> {name} </a>
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
                            <button disabled={true}> <RemoveIcon/> </button>
                            <div>
                                <p>{qty?.serviceAmount}</p>
                                <p>{qty?.serviceName}</p>
                            </div>
                            <button disabled={true}> <AddIcon/> </button>
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
                        <p className={styles.price}>{price} ₼</p>
                    </div>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default OrderListComponent ;

