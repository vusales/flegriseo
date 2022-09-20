import React from "react"; 
import styles from "./index.module.scss";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const SiteStatistics = ({data}) => {
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
                    data?.map((item , index)=>{
                        return(
                            <Grid key={`${item.id}${index}-statistics`} item xs={6} md={3}>
                                <div className={styles.descriptionCon}>
                                    <div className={styles.iconCon}>
                                        {item.icon}
                                    </div>
                                    <p>{item.amount}+</p>
                                    <p>{item.description}</p>
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


