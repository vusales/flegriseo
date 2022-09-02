import React from "react"; 
import styles from "./index.module.scss";
import { Paper , Grid } from "@mui/material";
import Image from "next/image" ; 


const StaticBanner = ({imageSrc , buttonText , description , subTitle , title , imgSrc}) => {
    return (
        <Paper elevation={2} className={styles.paper}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div className={styles.descriptionConatiner}>
                        <div className={styles.titleConatiner}>
                            <p>{subTitle}</p>
                            <h1>{title}</h1>
                        </div>
                        <p>{description}</p>

                        <a className={styles.button}>
                            {buttonText}
                        </a>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={styles.imageContainer}>
                        <Image src={imageSrc} height={250} width={350} alt="staticBannerimage" />
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default StaticBanner ; 