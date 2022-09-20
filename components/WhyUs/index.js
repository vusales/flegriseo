import React from "react"; 
import styles from "./index.module.scss";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const WhyUs = ({data}) => {

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
                    data ? 
                    data.map((item, index)=>{
                        return(
                            <Grid key={`whyUs${item._id}`} item xs={12} md={4}>
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
                    :null
                }
            </Grid>
        </Paper>
    )
}

export default WhyUs ;