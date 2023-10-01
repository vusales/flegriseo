import React from "react"; 
import styles from "./index.module.scss";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from "next/link";
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from "next/image";
import {makeImageUrl}  from "../../utils/helper"; 
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArticleIcon from '@mui/icons-material/Article';


const SubScription = ({data}) => {
    
    return(
        <Paper elevation={2} className={styles.paper}>
            <div className={styles.subscriptionContainer}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <div className={styles.textContainer}>
                            <div>
                                <p className={styles.price }>From {data.price} ₼ / month</p>
                                <h2 className={styles.title}>{data.title}</h2>
                                <p >{data.subTitle}</p>
                            </div>
                            <p className={styles.description}>{data.description}</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={styles.linksContainer}>
                            {
                                data?.subscriptions?.length&&data?.subscriptions.map((item , index)=>{
                                    return (
                                        <div  
                                        className={styles.socialCon}
                                        key={`subscriptions${index}`}
                                        >
                                            {
                                                item?.image ? 
                                                <Image 
                                                src={makeImageUrl(item.image)}
                                                height={50}
                                                width={50}
                                                />
                                                :null
                                            }
                                            
                                            <p>{item.title} subscriptions</p>
                                            <Link 
                                            href={{
                                                pathname: "/SubscriptionDetails" ,
                                                query: { id: item._id },
                                            }}
                                            >
                                                <a>
                                                    Subscribe 
                                                </a>
                                            </Link>
                                        </div>
                                    )
                                })
                            } 
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Paper>   
    )
}



export default SubScription; 