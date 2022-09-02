import react from "react"
import styles from "./index.module.scss";
import CommonLayout from "../../layout/commonLayout";
import Container from '@mui/material/Container';
import SpecialAnouncment from "../../components/SpecialAnouncment";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StaticBanner from "../../components/StaticBanner";


const demoforStaticBanner = {
    id:1 , 
    subTitle: "Inexpensive services", 
    title: "Affordable SMM promotion", 
    description: "We will think over a strategy, draw up a page promotion plan and ensure a constant flow of customers, this is to attract new subscribers and increase popularity by reaching the target audience. Increasing brand awareness, proper advertising, comprehensive services to increase views, likes and subscribers!" , 
    buttonText: "View cheap services",
    imgSrc: "/banner3.png",
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



const UserChoice = () => {
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
            </Container>
        </CommonLayout>
    )
}

export default UserChoice ; 