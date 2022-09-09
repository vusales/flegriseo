import React , {useState } from "react";
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
        image: "/cardImg.png" , 
        cardName: "All cards (manats)" , 
    }, 
    {
        image: "/cardImg.png" , 
        cardName: "Cards (dollars)" , 
    }, 
    {
        image: "/cardImg.png" , 
        cardName: "All cards (manats)" , 
    }, 
    {
        image: "/cardImg.png" , 
        cardName: "Cards (dollars)" , 
    }, 
    {
        image: "/cardImg.png" , 
        cardName: "All cards (manats)" , 
    }, 
    {
        image: "/cardImg.png" , 
        cardName: "Cards (dollars)" , 
    }, 
    {
        image: "/cardImg.png" , 
        cardName: "All cards (manats)" , 
    }, 
    {
        image: "/cardImg.png" , 
        cardName: "Cards (dollars)" , 
    }, 

];

const SelectPaymantMethod = ({disableShadow , componentStyle , accordionDetailMarginTop , paddingLeft , title }) => {
   const [collapsed , setCollapsed ] = useState(true); 

    return(
        <Paper elevation={disableShadow ? 0 :2} className={styles.papper} style={{...componentStyle}||{}}>
            <Accordion
            expanded={collapsed}
            onChange={()=>setCollapsed(!collapsed)}
            sx={{
                border:"none" , 
                boxShadow:"none",
            }}
            >
                <AccordionSummary
                sx={{
                    borderBottom: "1px solid #DADADA" , 
                    paddingLeft: paddingLeft || 2, 
                }}
                expandIcon={<ExpandMoreIcon className={styles.accordExpandIcon} />}
                >
                    <Typography className={styles.accordTitle} >
                        SELECT A PAYMENT METHOD
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                sx={{
                    paddingLeft: paddingLeft || 2,
                    paddingRight:0,
                    marginTop: accordionDetailMarginTop || 0 ,
                }}
                >
                    <div className={styles.paymantCardsContainer}>
                        {
                            cardDescription.map((item, index)=> <PaymantCardComponent key={`${index}-singleCard`} data={item}  title={title}/> )
                        }
                    </div>
                </AccordionDetails>
            </Accordion>
        </Paper>
    )
}

export default SelectPaymantMethod ; 