import React from "react"
import styles from "./index.module.scss";
import ListIcon from '@mui/icons-material/List';
import Link from "next/link";
import { DesktopTablet , Desktop} from "../../ui/Breakpoints";
import { Grid } from "@mui/material";
import AddLinkIcon from '@mui/icons-material/AddLink';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const OrderCheckoutComponent = () => {
    return (
        <Grid item xs={12} >
            <Grid container spacing={2} p={2}  >
                <Grid item  xs={12} p={2} pl={0} className={styles.titleBorder}>
                    <div className={styles.cover}>
                        <p className={styles.title}>Checkout</p>
                    </div>
                </Grid>
                <Grid item  xs={12} sx={{paddingLeft:"0px !important"}}>
                    <div className={styles.cover}>
                        <form>
                            <div className={styles.inputContainer}>
                                <div className={styles.iconContainer}>
                                    <AddLinkIcon />
                                </div>

                                <input  
                                type="url"
                                placeholder="Insert link"
                                />

                            </div>

                            <div className={styles.dividerCon}>
                                <div className={styles.inputContainer}>
                                    <div className={styles.iconContainer}>
                                        <AlternateEmailIcon />
                                    </div>

                                    <input  
                                    type="email"
                                    placeholder="Your email"
                                    />

                                </div>
                                <div className={styles.inputContainer}>
                                    <div className={styles.iconContainer}>
                                        <PhoneIphoneIcon />
                                    </div>

                                    <input  
                                    type="tel"
                                    placeholder="Your phone number"
                                    />

                                </div>
                            </div>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default OrderCheckoutComponent ; 