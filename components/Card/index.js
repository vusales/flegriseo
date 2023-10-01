import React from "react";
import styles from "./index.module.scss";
import { Grid } from "@mui/material";
import Link from "next/link";
import Image from "next/image"; 
import {makeImageUrl} from "../../utils/helper"; 



const Card = ({data , xs , md , containerStyle }) => {

    const Promotion = (decription , color , key ) => {
        if(decription){
            return (
                <div key={key} className={styles.promotion} style={color ? {backgroundColor: color} : null }>
                    {decription}
                </div>
            )
        }else {
            return null;
        }
    }


    return (
        <Grid item xs={xs ? xs : 12}  sm = {6} md={md ? md : 3}  >
            <div className={ containerStyle ? `${styles.container} ${containerStyle}` :styles.container}>
                { 
                data?.promotions?.length ? 
                data?.promotions.map((item ,  index)=>Promotion(item?.promotion , item?.color , index+"jhbj"))
                : null 
                }
                <Link 
                href={{
                    pathname: '/productDetails',
                    query: { id: data._id  },
                }}
                >
                    <a>
                        {
                            data.image ? 
                            <Image src={makeImageUrl(data.image)} width={120} height={120} alt="image" />
                            :
                            <Image src="/noimg.svg" width={120} height={120} alt="image" />
                        }
                    </a>
                </Link>
                
                <Link  
                href={{
                    pathname: '/productDetails',
                    query: { id: data._id  },
                }} 
                >
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
                <Link 
                href={{
                    pathname: '/productDetails',
                    query: { id: data._id },
                }}
                >
                    <a className={styles.button}>
                        Design
                    </a>
                </Link>
            </div>
        </Grid>
    )
}

export default Card ; 