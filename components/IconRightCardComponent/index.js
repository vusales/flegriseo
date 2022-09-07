import React from "react";
import styles from "./index.module.scss";


const IconRightCardComponent = ({icon , title  , description }) => {
    return(
        <div
        className={styles.container}
        >
            <div>{icon}</div>
            <div>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}


export default IconRightCardComponent ; 