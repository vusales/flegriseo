import React , { useState , useEffect } from "react"; 
import styles from "./index.module.scss";
import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useRouter } from "next/router";
import { makeImageUrl } from "../../utils/helper";



const ProductDetailsComponent = ({data}) => {
    const router  = useRouter(); 
    const [serviceAmount , setServiceAmount] = useState(); 
    const [step , setStep ] = useState(); 

    useEffect(()=>{
        setServiceAmount(data?.options?.serviceAmount); 
        setStep(data?.options?.serviceAmount); 
    }, []); 



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

    const increaseServiceAmount = () =>{
        const increasedValue =  serviceAmount + step ; 
        setServiceAmount(increasedValue); 
    }

    const decreaseServiceAmount = () => {
        if( serviceAmount <= data?.options?.serviceAmount ) return ;
        const increasedValue =  serviceAmount - step ; 
        setServiceAmount(increasedValue); 
    }

    return(
        <Grid container>
            <Grid item xs={12} md={3} >
                <div className={styles.imageContainer}>
                    { 
                    data?.promotions?.length ? 
                    data?.promotions.map((item , index)=>Promotion(item?.promotion , item?.color))
                    : null 
                    }
                    {
                        data.image ? 
                        <Image src={makeImageUrl(data?.image)} width={150} height={150} />
                        :null 
                    }
                </div>
            </Grid>
            <Grid item xs={12} md={9} >
                <div className={styles.descriptionCon}>
                    <h1>{data?.title}</h1>
                    <div className={styles.middleSection}>
                        {
                            data?.discountPrice? 
                            <p className={styles.price}>{data?.discountPrice*serviceAmount }₼ <span>{data?.price* serviceAmount}₼</span></p>
                            :
                            <p className={styles.price}>{data?.price*serviceAmount}₼</p>
                        }
                        <div className={styles.addRemoveContainer}>
                            <button onClick={()=> decreaseServiceAmount()  }> <RemoveIcon/> </button>
                            <div>
                                <p>{serviceAmount}</p>
                                <p>{data?.options?.serviceName}</p>
                            </div>
                            <button onClick={()=> increaseServiceAmount() }> <AddIcon/> </button>
                        </div>
                        {/* <Link 
                        href={{
                            pathname: "/order" ,
                            query: { 
                                choosenProduct : {
                                    serviceAmount: serviceAmount , 
                                    serviceName: data?.options?.serviceName, 
                                    title: data?.title ,
                                    price:  data?.discountPrice? data?.discountPrice*serviceAmount : data?.price*serviceAmount,
                                },  
                            },
                          }}
                        >
                            <a className={styles.button}>Order</a>
                        </Link> */}

                        <button 
                        className={styles.button}
                        onClick={() => router.push({
                            pathname: "/order" ,
                            query: { 
                                serviceAmount: serviceAmount , 
                                serviceName: data?.options?.serviceName, 
                                title: data?.title ,
                                price:  data?.discountPrice? data?.discountPrice*serviceAmount : data?.price*serviceAmount,
                                image: data.image ,
                            },
                        })}
                        >
                            Order
                        </button>
                    </div>
                    {
                        data.options.anouncementText ? 
                        <div className={styles.infoContainer}>
                            <ErrorOutlineIcon />
                            <p>{data?.options?.anouncementText}</p>
                        </div>
                        :null
                    }
                </div>
            </Grid>
        </Grid>
    )
}

export default ProductDetailsComponent ; 