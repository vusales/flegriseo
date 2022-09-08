import React from "react"; 
import styles from "./index.module.scss";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from "next/link";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArticleIcon from '@mui/icons-material/Article';


const SubScription = () => {
    return(
        <Paper elevation={2} className={styles.paper}>
            <div className={styles.subscriptionContainer}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <div className={styles.textContainer}>
                            <div>
                                <p className={styles.price }>From 1000 ₼ / month</p>
                                <h2 className={styles.title}>Service Subscription</h2>
                                <p >Pay less, get more!</p>
                            </div>

                            <p className={styles.description}> Subscriptions are the best way to promote and promote your social media accounts. Promotion in social networks by subscription is an opportunity to show your activities and quickly attract a target audience that is ready to take real actions. We guarantee the fulfillment of even the largest order. 
                            <br />
                            <br/>
                            Bonuses are offered for new customers who place large orders. When you contact us on an ongoing basis, you are guaranteed to receive discounts. We provide promotion services based on the use of white methods. You do not risk by contacting us. </p>
                        </div>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={styles.linksContainer}>
                            <div  className={styles.socialCon}>
                                <InstagramIcon/>
                                <p>Instagram subscription</p>
                                <Link href="/">
                                    <a>
                                        design 
                                    </a>
                                </Link>
                            </div>
                            <div  className={styles.socialCon}>
                                <ArticleIcon/>
                                <p>Vk subscription</p>
                                <Link href="/">
                                    <a>
                                        design 
                                    </a>
                                </Link>
                            </div>
                            <div  className={styles.socialCon}>
                                <YouTubeIcon/>
                                <p>Youtube subscription</p>
                                <Link href="/">
                                    <a>
                                        design 
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Paper>   
    )
}

export default SubScription; 