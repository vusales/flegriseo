import React from "react";
import styles from "./index.module.scss";
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PaymantCardComponent from "../PaymantCardComponent";


const cardDescription = [
    {
        image: "" , 
        cardName: "All cards (rubbles)" , 
    }, 

];

const SelectPaymantMethod = () => {

    return(
        <Paper elevation={2} className={styles.papper}>
            <Accordion
            sx={{
                border:"none" , 
                boxShadow:"none",
            }}
            >
                <AccordionSummary
                sx={{
                    borderBottom: "1px solid #DADADA"
                }}
                expandIcon={<ExpandMoreIcon className={styles.accordExpandIcon} />}
                >
                    <Typography>
                        <p className={styles.accordTitle}>SELECT A PAYMENT METHOD</p>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                sx={{
                    paddingLeft:0
                }}
                >
                    <div>
                        {
                            cardDescription.map((item, index)=> <PaymantCardComponent key={`${index}-singleCard`} data={item} /> )
                        }
                    </div>
                </AccordionDetails>
            </Accordion>
        </Paper>
    )
}

export default SelectPaymantMethod ; 