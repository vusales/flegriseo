import React from "react"; 
import styles from "./index.module.scss";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from "next/link";

const data = [
    {
        id:1 , 
        icon: "" , 
        title: "Instagram", 
        subServicess : [
            {
                id:1 , 
                icon: "" , 
                title: "Instagram 1", 
                link: "flegri.com",
            }, 
            {
                id:2, 
                icon: "" , 
                title: "Instagram 2", 
                link: "flegri.com",
            }, 
            {
                id:3, 
                icon: "" , 
                title: "Instagram 3", 
                link: "flegri.com",
            }, 
            {
                id:4, 
                icon: "" , 
                title: "Instagram 4", 
                link: "flegri.com",
            },
        ] , 
    },
    {
        id: 2, 
        icon: "" , 
        title: "Telegram", 
        subServicess : [
            {
                id:1 , 
                icon: "" , 
                title: "Telegram 1", 
                link: "flegri.com",
            }, 
            {
                id:2, 
                icon: "" , 
                title: "Telegram 2", 
                link: "flegri.com",
            }, 
            {
                id:3, 
                icon: "" , 
                title: "Telegram 3", 
                link: "flegri.com",
            }, 
            {
                id:4, 
                icon: "" , 
                title: "Telegram 4", 
                link: "flegri.com",
            },
        ] , 
    },
    {
        id: 3, 
        icon: "" , 
        title: "Whatsapp", 
        subServicess : [
            {
                id:1 , 
                icon: "" , 
                title: "Whatsapp 1", 
                link: "flegri.com",
            }, 
            {
                id:2, 
                icon: "" , 
                title: "Whatsapp 2", 
                link: "flegri.com",
            }, 
            {
                id:3, 
                icon: "" , 
                title: "Whatsapp 3", 
                link: "flegri.com",
            }, 
            {
                id:4, 
                icon: "" , 
                title: "Whatsapp 4", 
                link: "flegri.com",
            },
        ] , 
    },
    {
        id: 3, 
        icon: "" , 
        title: "TikTok", 
        subServicess : [
            {
                id:1 , 
                icon: "" , 
                title: "Tiktok 1", 
                link: "flegri.com",
            }, 
            {
                id:2, 
                icon: "" , 
                title: "Tiktok 2", 
                link: "flegri.com",
            }, 
            {
                id:3, 
                icon: "" , 
                title: "Tiktok 3", 
                link: "flegri.com",
            }, 
            {
                id:4, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
            {
                id:5, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
            {
                id:6, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
            {
                id:7, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
        ] , 
    },
    {
        id: 3, 
        icon: "" , 
        title: "TikTok", 
        subServicess : [
            {
                id:1 , 
                icon: "" , 
                title: "Tiktok 1", 
                link: "flegri.com",
            }, 
            {
                id:2, 
                icon: "" , 
                title: "Tiktok 2", 
                link: "flegri.com",
            }, 
            {
                id:3, 
                icon: "" , 
                title: "Tiktok 3", 
                link: "flegri.com",
            }, 
            {
                id:4, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
            {
                id:5, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
            {
                id:6, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
            {
                id:7, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
        ] , 
    },
    {
        id: 3, 
        icon: "" , 
        title: "TikTok", 
        subServicess : [
            {
                id:1 , 
                icon: "" , 
                title: "Tiktok 1", 
                link: "flegri.com",
            }, 
            {
                id:2, 
                icon: "" , 
                title: "Tiktok 2", 
                link: "flegri.com",
            }, 
            {
                id:3, 
                icon: "" , 
                title: "Tiktok 3", 
                link: "flegri.com",
            }, 
            {
                id:4, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
            {
                id:5, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
            {
                id:6, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
            {
                id:7, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
        ] , 
    },
    {
        id: 3, 
        icon: "" , 
        title: "TikTok", 
        subServicess : [
            {
                id:1 , 
                icon: "" , 
                title: "Tiktok 1", 
                link: "flegri.com",
            }, 
            {
                id:2, 
                icon: "" , 
                title: "Tiktok 2", 
                link: "flegri.com",
            }, 
            {
                id:3, 
                icon: "" , 
                title: "Tiktok 3", 
                link: "flegri.com",
            }, 
            {
                id:4, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
            {
                id:5, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
            {
                id:6, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
            {
                id:7, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
        ] , 
    },
    {
        id: 3, 
        icon: "" , 
        title: "TikTok", 
        subServicess : [
            {
                id:1 , 
                icon: "" , 
                title: "Tiktok 1", 
                link: "flegri.com",
            }, 
            {
                id:2, 
                icon: "" , 
                title: "Tiktok 2", 
                link: "flegri.com",
            }, 
            {
                id:3, 
                icon: "" , 
                title: "Tiktok 3", 
                link: "flegri.com",
            }, 
            {
                id:4, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
            {
                id:5, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
            {
                id:6, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
            {
                id:7, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
        ] , 
    },
    {
        id: 3, 
        icon: "" , 
        title: "TikTok", 
        subServicess : [
            {
                id:1 , 
                icon: "" , 
                title: "Tiktok 1", 
                link: "flegri.com",
            }, 
            {
                id:2, 
                icon: "" , 
                title: "Tiktok 2", 
                link: "flegri.com",
            }, 
            {
                id:3, 
                icon: "" , 
                title: "Tiktok 3", 
                link: "flegri.com",
            }, 
            {
                id:4, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
            {
                id:5, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
            {
                id:6, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
            {
                id:7, 
                icon: "" , 
                title: "Tiktok 4", 
                link: "flegri.com",
            },
        ] , 
    },
]; 


const CatalogSection = () => {
    return(
        <Paper elevation={1}  className={styles.paper}>
            <div className={styles.container}>
                <div className={styles.titleCon} >
                    <h2>Service catalog</h2>
                    <div className={styles.line}></div>
                </div>

                <Grid container spacing={2}>
                    {
                        data.map((item, index)=>{
                            return(
                                <Grid key={`accordion-home-${index}`} item xs={12} md={4} lg={3}>
                                    <div className={styles.accordionContainer}>
                                        <Accordion
                                        style={{width:"95%" , borderRadius:2 }}
                                        >
                                            <AccordionSummary
                                            expandIcon={<AddIcon/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            >
                                            <div className={styles.summaryContainer}>
                                                    <InstagramIcon /> 
                                                    <p>{item.title}</p>
                                            </div>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                {
                                                    item.subServicess.map((subItems ,  index)=> {
                                                        return (
                                                            <Link href="/">
                                                                <a>
                                                                    <div className={styles.detailsContainer}>
                                                                        <div>
                                                                            <div>
                                                                                <InstagramIcon /> 
                                                                                <p>{subItems.title}</p>
                                                                            </div>
                                                                            <ArrowForwardIosIcon /> 
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </AccordionDetails>
                                        </Accordion>
                                    </div>
                                </Grid>
                            )
                        })
                    }
                </Grid>


            </div>
        </Paper>    
    )
}

export default CatalogSection ;