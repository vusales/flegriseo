import React from "react"; 
import styles from "./index.module.scss";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RocketIcon from '@mui/icons-material/Rocket';
import VerifiedIcon from '@mui/icons-material/Verified';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

const data = [
    {
        id:1 , 
        icon: <VisibilityIcon/> , 
        count:  "296202494222" , 
        title:  "Views added" , 
    }, 
    {
        id:2 , 
        icon: <RocketIcon/> , 
        count:  "396802377" , 
        title:  "Attracted subscribers" , 
    }, 
    {
        id:3 , 
        icon: <VerifiedIcon/> , 
        count:  "35415877" , 
        title:  "Fulfilled orders" , 
    }, 
    {
        id:4 , 
        icon: <CreditScoreIcon/> , 
        count:  "35415877" , 
        title:  "Satisfied customers" , 
    }, 
];



const SiteStatistics = () => {
    return (
        <Paper  elevation={2} className={styles.paper}>
            <Grid container>
                <Grid item xs={12} >
                    <div className={styles.titleCon}>
                        <h2>Site statistics</h2>
                        <div className={styles.line}></div>
                    </div>
                </Grid>
                {
                    data.map((item , index)=>{
                        return(
                            <Grid key={`${item.id}${index}-statistics`} item xs={12} md={3}>
                                <div className={styles.descriptionCon}>
                                    <div className={styles.iconCon}>
                                        {item.icon}
                                    </div>
                                    <p>{item.count} +</p>
                                    <p>{item.title}</p>
                                </div>
                            </Grid>
                        )
                    })
                }
                
            </Grid>
        </Paper>
    )
}

export default SiteStatistics ;


