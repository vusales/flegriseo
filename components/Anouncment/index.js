import React from "react"; 
import styles from "./index.module.scss";
import AnouncmentCard from "../AnouncmntCard";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import PaymentsIcon from '@mui/icons-material/Payments';
import CampaignIcon from '@mui/icons-material/Campaign';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';

const demoData = [
    {
        id:1,
        icon: <WbSunnyIcon/> , 
        title: "Гарантия исполнения"  , 
        description: "Высокая скорость выполнения каждого заказа с гарантией."
    }, 
    {
        id:2,
        icon: <PaymentsIcon /> , 
        title: "Бонусы и скидки"  , 
        description: "Действующая система скидок для постоянных клиентов сервиса."
    }, 
    {
        id:3,
        icon: <CampaignIcon /> , 
        title: "Выгодная подписка"  , 
        description: "Экономьте деньги и время, новые заказы будут оформляться за вас.."
    }, 
    {
        id:4,
        icon: <EmojiFoodBeverageIcon/>, 
        title: "Премиум раскрутка"  , 
        description: "Премиальное продвижение страниц под ключ с гарантией."
    }, 
]; 


const Anouncment = () => {
    return (
        <div className={styles.anouncmentContainer}>
            {
                demoData.map((item, index)=>{
                    return(
                        <AnouncmentCard 
                        key={`${index}-anouncmentCars`}
                        data={item}
                        />
                    )
                })
            }
        </div>
    )
}

export default Anouncment ; 