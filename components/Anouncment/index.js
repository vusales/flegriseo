import React from "react"; 
import styles from "./index.module.scss";
import AnouncmentCard from "../AnouncmntCard";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import PaymentsIcon from '@mui/icons-material/Payments';
import CampaignIcon from '@mui/icons-material/Campaign';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';

const Anouncment = ({data}) => {
    return (
        <div className={styles.anouncmentContainer}>
            {
                data.map((item, index)=>{
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