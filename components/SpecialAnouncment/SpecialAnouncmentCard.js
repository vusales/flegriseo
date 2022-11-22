import React from "react"; 
import styles from "./index.module.scss";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


const SpecialAnouncementCard = ({icon  , description }) =>{
    return (
    <div className={styles.cardContainer}>
        <div>
            <div></div>
            <div></div>
        </div>

        {icon || <ShoppingBasketIcon /> }
        <p>{description}</p>
    </div>
    )
}

export default SpecialAnouncementCard ;