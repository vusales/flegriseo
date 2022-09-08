import React from "react"
import styles from "./index.module.scss";
import { Grid , Rating } from "@mui/material";
import Image from "next/image";
import { DesktopTablet } from "../../ui/Breakpoints";

const SingleCommentComponent = ({data , rating}) => {
    return (
        <Grid item xs={12}>
            <div className={styles.commentsContainer}>
                <DesktopTablet>
                    <div className={styles.imageContainer}>
                        {
                            data.image?
                            <Image src="/cardImg.png" width={60} height={60} alt="user profile image" />
                            :
                            <div className={styles.notImage}>hello</div>
                        }
                    </div>
                </DesktopTablet>

                <div className={styles.descriptionContainer}>
                    <div className={styles.ratingTitle}>
                        <p className={styles.title} >{data.title}</p>
                        {
                            rating?
                            <Rating 
                            size="small"
                            name="half-rating-read" 
                            value={3.5} 
                            precision={0.5} 
                            readOnly 
                            />
                            :null
                        }
                        
                    </div>
                    <p className={styles.description}>{data.comment}</p>
                </div>
            </div>
        </Grid>
    )
}

export default SingleCommentComponent ; 