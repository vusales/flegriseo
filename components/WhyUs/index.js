import React from "react"; 
import styles from "./index.module.scss";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from "next/link";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const demodata = [
    {
        id: 1 , 
        title: "Performance guarantee", 
        description: "If your order is not completed, we will issue a full refund.", 
        icon: <VolunteerActivismIcon/> ,
    }, 
    {
        id: 2 , 
        title: "Performance guarantee", 
        description: "If your order is not completed, we will issue a full refund.", 
        icon: <VolunteerActivismIcon/> ,
    }, 
    {
        id: 3 , 
        title: "Performance guarantee", 
        description: "If your order is not completed, we will issue a full refund.", 
        icon: <VolunteerActivismIcon/> ,
    }, 
]; 

const WhyUs = () => {
    return(
        <Paper elevation={2} className={styles.paper}>
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <div className={styles.titleContainer}>
                        <span>Platform Benefits</span>
                        <h2>Why choose FLESMO Service?</h2>
                        <div className={styles.line}></div>
                    </div>
                </Grid>
                {
                    demodata.map((item, index)=>{
                        return(
                            <Grid key={`whyUs${index}`} item xs={12} md={4}>
                                <div className={styles.description}>
                                    {item.icon}
                                    <div>
                                        <p>{item.title}</p>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </Grid>
                        )
                    })
                }

                
            </Grid>
        </Paper>
    )
}

export default WhyUs ;