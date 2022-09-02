import React from "react"; 
import styles from "./index.module.scss";
import { Paper } from "@mui/material";
import SingleFilterButton from "./SingleFilterButton";

const FilterButtons = ({data}) => {
    return (
        <div className={styles.filterButtonContainer}>
            {
                data.map((item, index)=>{
                    return(
                        <SingleFilterButton
                        key={`singleFilterButt${index}`}
                        data={item}
                        />
                    )
                })
            }
        </div>
    )
}

export default FilterButtons ;
