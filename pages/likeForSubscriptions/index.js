import React from "react";
import styles from "./index.module.scss";
import { Grid , Container} from "@mui/material";
import CommonLayout from "../../layout/commonLayout";
import Link from "next/link";
import SpecialAnouncment from "../../components/SpecialAnouncment";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Paper} from "@mui/material";
import IconRightCardComponent from "../../components/IconRightCardComponent";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import PaymentsIcon from '@mui/icons-material/Payments';
import CampaignIcon from '@mui/icons-material/Campaign';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import Image from "next/image";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { DesktopTablet , Desktop } from "../../ui/Breakpoints";
import { getCatalogData } from "../../api/catalogContent";




const specialAnounc = [
    {
        id:1 , 
        icon: "ShopTwo" , 
        description: "Affordable SMM promotion", 
    }, 

    {
        id:1 , 
        icon: "ShopTwo" , 
        description: "Affordable SMM promotion", 
    }, 

    {
        id:1 , 
        icon: "ShopTwo" , 
        description: "Affordable SMM promotion", 
    }, 

    {
        id:1 , 
        icon: "ShopTwo" , 
        description: "Affordable SMM promotion", 
    }, 

];


const demoData = [
    {
        id:1,
        icon: <WbSunnyIcon/> , 
        title: "Гарантия исполнения"  , 
        description: "Высокая скорость выполнения каждого заказа с гарантией."
    }, 
    {
        id:2,
        icon: <PaymentsIcon /> , 
        title: "Бонусы и скидки"  , 
        description: "Действующая система скидок для постоянных клиентов сервиса."
    }, 
    {
        id:3,
        icon: <CampaignIcon /> , 
        title: "Выгодная подписка"  , 
        description: "Экономьте деньги и время, новые заказы будут оформляться за вас.."
    }, 
]; 

const againDemo = [
    {
        title: "Гарантия исполнения"  , 
        description: "Высокая скорость выполнения каждого заказа с гарантией.", 
        link:"/PriceList"
    }, 
    {
        title: "Бонусы и скидки"  , 
        description: "Действующая система скидок для постоянных клиентов сервиса." , 
        link:"/"
    }, 
    {
        title: "Выгодная подписка"  , 
        description: "Экономьте деньги и время, новые заказы будут оформляться за вас.." , 
        link:"/"
    }, 
]; 

function createData( num , advantages, subscriptions , promotion ) {
    return { num , advantages, subscriptions , promotion };
  }
  
  const rows = [
    createData(1 , "Does not require manual placement of an order on the site." ,  <CheckIcon /> , <CloseIcon/> ),
   
  ];


const LikeForSubscriptions = ({catalog}) => {
    return(
        <CommonLayout catalog={catalog}>
            <Container >
                <Grid container>
                    <Grid item  xs={12}>
                        <div className={styles.banner}>
                            <p>Increasing activity and statistics</p>
                            <h1>Boost your stats and activity! <br /> Subscription for everyone</h1>
                            <p>Subscriptions are the best way to promote that we have come up with for you. <br/> Automatic order for VKontakte, Instagram and YouTube.</p>
                            <p>From 499 ₼ / month</p>

                            <div className={styles.buttonContainer}>
                                <Link href="/">
                                    <a className={styles.button }>Subscribe</a>
                                </Link>
                                <Link href="/">
                                    <a className={styles.button }>compare benefits</a>
                                </Link>
                            </div>
                        </div>
                    </Grid>

                    <Grid item  xs={12} pt={5} pb={5}>
                        <SpecialAnouncment data={specialAnounc}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper elevation={2} className={styles.papper}>
                            <Grid container spacing={2} p={1}>
                                <Grid item xs={12}>
                                    <div className={styles.titleCon} >
                                        <h2>How to connect SMO Service subscription?</h2>
                                        <div className={styles.line}></div>
                                    </div>
                                </Grid>

                                <Grid item xs={12} mb={2}>
                                    <div className={styles.titleCon} >
                                        <p className={styles.infoText}>Go to the checkout page for a subscription for your social network. <br/>
                                        Specify the necessary settings, make a registered subscription on the card.</p>
                                    </div>
                                </Grid>

                                <Grid item xs={12} md={12} lg={4}>
                                    <Grid container flexDirection="column" spacing={2}> 
                                        {
                                            demoData.map((item , index)=>
                                            <Grid item xs={12} mb={4} >
                                                <IconRightCardComponent key={`cards-${index}`} icon={item.icon} title={item.title} description={item.description} />
                                            </Grid>)
                                        }
                                    </Grid>
                                </Grid>
                                <Desktop>
                                    <Grid item xs={12} md={12} lg={4} >
                                        <Grid container flexDirection="column" spacing={2} justifyContent="center" alignItems="center" >
                                            <Image src="/subscription.png"  height={500} width={310} alt="subscription image"/>
                                        </Grid>
                                    </Grid>
                                </Desktop>

                                <Grid item xs={12} md={12} lg={4}>
                                    <Grid container flexDirection="column" spacing={2}> 
                                        {
                                            demoData.map((item , index)=>
                                            <Grid item xs={12} mb={4}>
                                                <IconRightCardComponent key={`cards-${index}`} icon={item.icon} title={item.title} description={item.description} />
                                            </Grid>)
                                        }
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>


                    <Grid item xs={12}>
                        <Paper elevation={2} className={styles.papper}>
                            <Grid container spacing={2} p={1}>
                                <Grid item xs={12}>
                                    <div className={styles.titleCon} >
                                        <h2>Subscriptions are the best solution for your business!</h2>
                                        <div className={styles.line}></div>
                                    </div>
                                </Grid>

                                <Grid item xs={12}>
                                    <TableContainer component={Paper}>
                                        <Table sx={{ width:"100%" }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>#</TableCell>
                                                    <TableCell align="left" className={styles.tableTitle}>Advantages</TableCell>
                                                    <TableCell align="center" className={styles.tableTitle}>Subscriptions</TableCell>
                                                    <TableCell align="center" className={styles.tableTitle}>Regular promotion</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    rows.map(
                                                        (item)=>(
                                                            <TableRow
                                                            key={item.num}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                            >
                                                                <TableCell align="left" className={styles.tableTitle} >{item.num}</TableCell>
                                                                <TableCell align="left">{item.advantages}</TableCell>
                                                                <TableCell align="center" >{item.subscriptions}</TableCell>
                                                                <TableCell align="center">{item.promotion}</TableCell>
                                                            </TableRow>
                                                        )
                                                    )
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <div style={{width:"100%" , padding:24 , textAlign:"center"}}>
                                        <Link href="/">
                                            <a className={styles.subscribe}>Subscribe</a>
                                        </Link>
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>


                    <Grid item xs={12}>
                        <Paper elevation={2} className={styles.papper}>
                            <Grid container spacing={2} p={1}>
                                <Grid item xs={12}>
                                    <div className={styles.titleCon} >
                                        <h2>Exclusive Services</h2>
                                        <div className={styles.line}></div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} mb={2}>
                                    <div className={styles.titleCon} >
                                        <p className={styles.infoText}>Take advantage of the special offer from FLESMO Service!</p>
                                    </div>
                                </Grid>

                                {
                                    againDemo.map((item , index)=>(
                                    <Grid item xs={12} md={4} key={index}>
                                        <div 
                                        className={styles.exclusiveItem}
                                        >
                                            <p>{item.title}</p>
                                            <p>{item.description}</p>
                                            <div style={{width:"100%" , padding:"24px 0",}}>
                                                <Link href={item.link}>
                                                    <a className={styles.subscribe}>Subscribe</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </Grid>
                                    ))
                                }
                            </Grid>
                        </Paper>
                    </Grid>



                </Grid>
            </Container>
            

        </CommonLayout>
    )
}

export const getStaticProps = async (context) => {

    // this request have to be each page 
    const catalogData =  await getCatalogData() ; 
    const catalog =  catalogData.data ;
    // *********************** 

    return {
      props : {
        catalog , 
      } 
    }
}

export default LikeForSubscriptions ; 