import React from "react"
import styles from "./index.module.scss";
import { Grid , Radio , Checkbox  } from "@mui/material";




const SingleSubscription = ({data ,  choosen , setChoosen }) =>{

    const {id , title , bonus} = data ; 

    const controlProps = (item) => ({
        // checked: selectedValue === item,
        // onChange: handleChange,
        // value: item,
        name: 'size-radio-button-order',
        inputProps: { 'aria-label': item },
    });
    
    return (
        <>
            <div 
            className={styles.singleSubscriptionContainer}
            onClick={()=>setChoosen(id)}
            >
                <div>
                    <Radio
                    {...controlProps()}
                    checked={choosen == id ? true :false }
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
                    <p className={styles.title}>{title}</p>
                    <p>{bonus}</p>
                </div>
            </div>
        
        </>
        
    )
}


export default SingleSubscription ; 