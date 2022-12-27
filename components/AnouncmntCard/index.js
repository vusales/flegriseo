import React from "react"; 
import styles from "./index.module.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro';


const AnouncmentCard = ({data}) =>{
    const {icon , title , description } =data ;
    return (
        <div className={styles.cardContiner}>
            <FontAwesomeIcon icon={solid('coffee')} size="lg" />
            <p className={styles.title}>{title}</p>
            <p>{description}</p>
        </div>
    )
}

export default AnouncmentCard ;