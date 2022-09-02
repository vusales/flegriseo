import React from "react"; 
import styles from "./index.module.scss";

const SingleFilterButton = ({data}) => {
    return (
        <div className={styles.singleButton}>
            {
                data.icon?
                data.icon
                :null
            }
            <p>{data.title}</p>
        </div>
    )
}

export default SingleFilterButton ;