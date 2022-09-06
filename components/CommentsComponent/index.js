import React , {useState } from "react"; 
import styles from "./index.module.scss";
import { Grid , Rating } from "@mui/material";
import SingleCommentComponent from "../SingleCommentComponent";
import Link from "next/link";

const CommentsComponent = ({data}) => {

    const [ratingValue  , setRatingValue ] = useState(3.5); 
    return (
        <Grid 
        container 
        spacing={2}
        p={3}
        direction="column"
        >
            <Grid item xs={12}>
                <div className={styles.commentTitleComponent}>
                    <h2>ОТЗЫВЫ</h2>
                    <div className={styles.ratingContainer}>
                        <p>Рейтинг</p>
                        <Rating 
                        name="half-rating-read" 
                        value={ratingValue} 
                        precision={0.5} 
                        readOnly 
                        />
                        <p>(50252)</p>
                    </div>
                </div>
            </Grid>

            {
                data.map((item, index)=>{
                    return(
                        <SingleCommentComponent  
                        key={`commentsMap-${index}`}
                        data={item}
                        />
                    )
                })
            }

            <Grid item xs={12}>
                <div className={styles.buttons}>
                    <Link href="/">
                        <a>
                            All Reviews 
                        </a>
                    </Link>
                </div>
            </Grid>
        </Grid>
    )
}

export default CommentsComponent ; 