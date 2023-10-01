import React from "react"; 
import styles from "./index.module.scss";
import {generateDynamicIcon} from "../../utils/helper"; 

const AnouncmentCard = ({data}) =>{
    const {icon , title , description } = data ;
    const IconComponent = generateDynamicIcon(icon);

    return (
        <div className={styles.cardContiner}>
            <IconComponent />
            <p className={styles.title}>{title}</p>
            <p>{description}</p>
        </div>
    )
}
export default AnouncmentCard ;