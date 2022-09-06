import React from "react"; 
import styles from "./index.module.scss";
import { Grid } from "@mui/material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';




const ProductDetailsCardsComponent = ({data}) => {
    return(
        <Grid item xs={12} md={3} >
            <div className={styles.cardContainer}>
                {data.icon}
                <p className={styles.title}>{data.title}</p>
                <p>{data.detail}</p>
            </div>
        </Grid>
    )
}

export default ProductDetailsCardsComponent ; 
