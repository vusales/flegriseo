import React from "react";
import styles from "./index.module.scss";
import { Grid } from "@mui/material";
import Link from "next/link";
import Image from "next/image"; 



const Card = ({data}) => {

    const Promotion = (decription , color) => {
        if(decription){
            return (
                <div className={styles.promotion} style={color ? {backgroundColor: color} : null }>
                    {decription}
                </div>
            )

        }else {
            return null;
        }
    }


    return (
        <Grid item xs={6} md={3} >
            <div className={styles.container}>
                { Promotion(data?.promotion , data?.color)}
                <Link href="/">
                    <a>
                        <Image src={data?.imgSrc} width={120} height={120} />
                    </a>
                </Link>
                
                <Link  href="/" >
                    <a className={styles.title}>
                        {data?.title}
                    </a>
                </Link>
                <div className={styles.priceCon}>
                    <p className={styles.price}>
                        {data?.price}
                    </p>
                </div>
                <p className={styles.description}>{data?.description}</p>

                <Link href="/">
                    <a className={styles.button}>
                        Design
                    </a>
                </Link>
                
            </div>
        </Grid>
    )
}

export default Card ; 