import React from "react"; 
import styles from "./index.module.scss";

const SpecialAnouncementCard = ({icon  , description }) =>{
    return (
    <div className={styles.cardContainer}>
        <div>
            <div></div>
            <div></div>
        </div>

        {icon}
        <p>{description}</p>
    </div>
    )
}

export default SpecialAnouncementCard ;