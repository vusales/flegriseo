import React from "react"; 
import styles from "./index.module.scss";
import SpecialAnouncementCard from "./SpecialAnouncmentCard";

const SpecialAnouncment = ({data}) => {
    return (
        <div className={styles.papper}>
            {
                data.map((item , index)=> {
                    return(
                        <SpecialAnouncementCard
                        key={`specialAnounc${index}`}
                        icon={item?.icon}
                        description={item?.description}
                        />
                    )
                })
            }
            
        </div>
    )
}

export default SpecialAnouncment;