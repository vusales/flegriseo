import react from "react"
import styles from "./index.module.scss";
import CommonLayout from "../../layout/commonLayout";
import Container from '@mui/material/Container';
import SpecialAnouncment from "../../components/SpecialAnouncment";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StaticBanner from "../../components/StaticBanner";
import { Grid } from "@mui/material";
import Card from "../../components/Card";


const demoforStaticBanner = {
    id:1 , 
    subTitle: "Inexpensive services", 
    title: "Affordable SMM promotion", 
    description: "We will think over a strategy, draw up a page promotion plan and ensure a constant flow of customers, this is to attract new subscribers and increase popularity by reaching the target audience. Increasing brand awareness, proper advertising, comprehensive services to increase views, likes and subscribers!" , 
    buttonText: "View cheap services",
    imgSrc: "/banner1.png",
}

const specialAnounc = [
    {
        id:1 , 
        icon: <ShoppingBasketIcon /> , 
        description: "Affordable SMM promotion", 
    }, 

    {
        id:1 , 
        icon: <ShoppingBasketIcon /> , 
        description: "Affordable SMM promotion", 
    }, 

    {
        id:1 , 
        icon: <ShoppingBasketIcon /> , 
        description: "Affordable SMM promotion", 
    }, 

    {
        id:1 , 
        icon: <ShoppingBasketIcon /> , 
        description: "Affordable SMM promotion", 
    }, 

]; 

const cardDemo  = [
    {
        id: 1 , 
        imgSrc: "/cardImg.png", 
        title: "LIKES ON PHOTO, VIDEO, ALBUm (STANDARD)", 
        price: "0.29 RUB for 1 like", 
        description: "Likes on photos from active users. Likes come from mobile applications.", 
        promotion: "" , 
        color: "green" , 
    }, 
    {
        id: 2 , 
        imgSrc: "/cardImg.png", 
        title: "LIKES ON PHOTO, VIDEO, ALBUm (STANDARD)", 
        price: "0.29 RUB for 1 like", 
        description: "Likes on photos from active users. Likes come from mobile applications.", 
        promotion: "Sale %" , 
        color: "green" , 

    },
    {
        id: 3  , 
        imgSrc: "/cardImg.png", 
        title: "LIKES ON PHOTO, VIDEO, ALBUm (STANDARD)", 
        price: "0.29 RUB for 1 like", 
        description: "Likes on photos from active users. Likes come from mobile applications.", 
        promotion: "Sale %" , 
        color: "orange" , 
    }, 
    {
        id: 4 , 
        imgSrc: "/cardImg.png", 
        title: "LIKES ON PHOTO, VIDEO, ALBUm (STANDARD)", 
        price: "0.29 RUB for 1 like", 
        description: "Likes on photos from active users. Likes come from mobile applications.", 
        promotion: "" , 
        color: "green" , 
    }, 
]; 



const SmmForBusiness = () => {
    return (
        <CommonLayout>
            <Container>
                <StaticBanner 
                title={demoforStaticBanner.title}
                subTitle={demoforStaticBanner.subTitle}
                description={demoforStaticBanner.description}
                buttonText={demoforStaticBanner.buttonText}
                imageSrc={demoforStaticBanner.imgSrc}
                /> 

                <SpecialAnouncment
                data={specialAnounc}
                />

                <Grid container spacing={2} sx={{marginTop:2,  marginBottom:2}}>
                    <Grid item xs={12} >
                        <div className={styles.title}>
                            <h2>PREMIUM SMM PROMOTION FOR BUSINESS</h2>
                            <div className={styles.line}></div>
                        </div>
                    </Grid>
                    {
                        cardDemo.map((item, index)=> {
                            return (
                                <Card
                                key={`cardCheap=${index}`}
                                data={item}
                                />
                            )
                        })
                    }
                </Grid>

            </Container>
        </CommonLayout>
    )
}

export default SmmForBusiness ; 