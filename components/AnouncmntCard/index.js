import React from "react"; 
import styles from "./index.module.scss";


const AnouncmentCard = ({data}) =>{
    const {icon , title , description } =data ;
    return (
        <div className={styles.cardContiner}>
            {icon}
            <p className={styles.title}>{title}</p>
            <p>{description}</p>
        </div>
    )
}

export default AnouncmentCard ;