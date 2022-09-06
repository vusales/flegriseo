import React from "react"
import styles from "./index.module.scss";
import { Grid ,} from "@mui/material";
import Image from "next/image";

const SingleCommentComponent = ({data}) => {
    return (
        <Grid item xs={12}>
            <div className={styles.commentsContainer}>
                <div className={styles.imageContainer}>
                    {
                        data.image?
                        <Image src="/cardImg.png" width={200} height={200} alt="user profile image" />
                        :
                        <div className={styles.notImage}>hello</div>
                    }
                </div>
                <div className={styles.descriptionContainer}>
                    <p className={styles.title} >{data.title}</p>
                    <p className={styles.description}>{data.comment}</p>
                </div>
            </div>
        </Grid>
    )
}

export default SingleCommentComponent ; 