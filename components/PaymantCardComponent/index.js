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
                    '& .MuiSvgIcon-root': { fontSize: 20 } , 
                    '&.Mui-checked': {
                      color: "#ff7100",
                    },
                }}
                />

                <p className={styles.cardName}>{cardName}</p>
            </div>
            <div>
                { image ?? <Image src="cardImg.png" width={50} height={50} alt="paymant card" /> }
                <Image src="/cardImg.png" width={30} height={30} alt="paymant card" />
            </div>
        </div>
    )
}


export default PaymantCardComponent ; 