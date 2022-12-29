import React from "react"; 
import styles from "./index.module.scss";
import { Grid } from "@mui/material";
import { generateDynamicIcon } from "../../utils/helper";




const ProductDetailsCardsComponent = ({data}) => {
    const {icon} =  data ; 

    console.log("icon" ,  icon ) ; 

    const Icon  =  generateDynamicIcon(icon) ; 

    return(
        <Grid item xs={12} md={3} >
            <div className={styles.cardContainer}>
                {/* {
                    data.icon ? 
                    <Icon />
                    :null 
                } */}

                <p className={styles.title}>{data.title}</p>
                <p>{data.description}</p>
            </div>
        </Grid>
    )
}

export default ProductDetailsCardsComponent ; 
