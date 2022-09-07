import React from "react";
import styles from "./index.module.scss";
import { Grid , Radio , Checkbox  } from "@mui/material";
import Image from "next/image";

const controlProps = (item) => ({
    // checked: selectedValue === item,
    // onChange: handleChange,
    // value: item,
    name: 'size-radio-button-order',
    inputProps: { 'aria-label': item },
});




const PaymantCardComponent = ({data}) => {
    const { image , cardName } = data ;
    return(
        <div className={styles.cardContainer}>
            <div>
                <Radio
                {...controlProps()}
                // checked={choosen == id ? true :false }
                size="small"
                className={styles.radio}
                sx={{
                    color: "#8f95a0",
                    '& .MuiSvgIcon-root': { fontSize: 15 } , 
                    '&.Mui-checked': {
                      color: "#ff7100",
                    },
                }}
                />
                <p className={styles.cardName}>{cardName}</p>
            </div>
            <div>
                { image ? <Image src="/cardImg.png" width={40} height={40} alt="paymant card" /> :null }
            </div>
        </div>
    )
}


export default PaymantCardComponent ; 