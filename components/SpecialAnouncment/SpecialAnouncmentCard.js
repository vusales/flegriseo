import React from "react"; 
import styles from "./index.module.scss";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { generateDynamicIcon } from "../../utils/helper";


const SpecialAnouncementCard = ({icon  , description }) =>{
    const Icon =  generateDynamicIcon(icon) ; 
    return (
    <div className={styles.cardContainer}>
        {/* theese divs are for lines in design */}
        <div>
            <div></div>
            <div></div>
        </div>

        {
            icon ? 
            <Icon />
            :null 
        }

        <p>{description}</p>
    </div>
    )
}

export default SpecialAnouncementCard ;