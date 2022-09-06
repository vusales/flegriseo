import React from "react"
import styles from "./index.module.scss";
import { Grid , Radio , Checkbox  } from "@mui/material";




const SingleSubscription = () =>{


    const controlProps = (item) => ({
        // checked: selectedValue === item,
        // onChange: handleChange,
        // value: item,
        name: 'size-radio-button-order',
        inputProps: { 'aria-label': item },
    });
    
    return (
        <>
            <div className={styles.singleSubscriptionContainer}>
                <div>
                    <Radio
                    {...controlProps()}
                    size="small"
                    className={styles.radio}
                    sx={{
                        color: "#8f95a0",
                        '& .MuiSvgIcon-root': { fontSize: 20 } , 
                        '&.Mui-checked': {
                        //   color: "#8f95a0",
                        },
                    }}
                    />
                </div>
                <div>
                    <p className={styles.title}>Single order</p>
                    <p>Re rendering with 10%</p>
                </div>
            </div>
        
        </>
        
    )
}


export default SingleSubscription ; 