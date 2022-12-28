import React from "react"
import styles from "./index.module.scss";
import ListIcon from '@mui/icons-material/List';
import Link from "next/link";
import { DesktopTablet , Desktop} from "../../ui/Breakpoints";
import { Grid } from "@mui/material";
import AddLinkIcon from '@mui/icons-material/AddLink';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import InputMask from 'react-input-mask';


const OrderCheckoutComponent = ({ callBackFunction , states }) => {
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
                        <div className={styles.inputContainer}>
                            <div className={styles.iconContainer}>
                                <AddLinkIcon />
                            </div>

                            <input  
                            type="url"
                            placeholder="Insert link"
                            value={states.url_link}
                            onChange={(e)=>{
                                callBackFunction({url_link : e.target.value});                                    
                            }}
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
                                value={states.email}
                                onChange={(e)=>{
                                    callBackFunction({email : e.target.value});                                    
                                }}
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <div className={styles.iconContainer}>
                                    <PhoneIphoneIcon />
                                </div>
                                <InputMask 
                                mask="99-999-99-99" 
                                value={states.phone}
                                onChange={(event)=>{
                                    let value = event.target.value.trim().split("-");
                                    let filteredString = value.filter((item)=> /\S/.test(item));
                                    let result = filteredString.join('');
                                    callBackFunction({phone: result });  
                                }}
                                >
                                    {(inputProps) => (
                                    <input
                                        {...inputProps}
                                        type="tel" 
                                        name="tel" 
                                        id="tel" 
                                        placeholder="+994 |" 
                                        required
                                    />
                                    )}
                                </InputMask>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default OrderCheckoutComponent ; 