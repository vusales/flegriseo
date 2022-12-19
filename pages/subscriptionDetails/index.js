import React ,  {useEffect , useState  } from "react" ;
import styles from "./index.module.scss";
import CommonLayout from "../../layout/commonLayout";
import { Container , Grid, Paper } from "@mui/material";
import Image from "next/image";
import LinkIcon from '@mui/icons-material/Link';
import VerifiedIcon from '@mui/icons-material/Verified';
import AddRemoveComponent from "../../components/AddRemoveComponent";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SelectPaymantMethod from "../../components/SelectPaymantMethod"; 
import Link from "next/link";
import { DesktopTablet } from "../../ui/Breakpoints";
import { useRouter } from 'next/router'; 
import { getCatalogData } from "../../api/catalogContent";
import {getSubscriptionsByIdApi}  from "../../api/homecontent";



const SubscriptionDetails = ({id, catalog , data  }) => {
    const router =  useRouter(); 
    const [subscriptions , setSubscriptions] =  useState({}); 
    const [allChoosenServicess , setAllChoosenServicess] =  useState([]); 
    const [url , setUrl] =  useState(""); 
    const [email , setEmail ] =  useState(""); 



    useEffect(()=>{
        setSubscriptions(data);
        console.log("allChoosenServicess" ,    allChoosenServicess );
        console.log("subscriptions" ,    subscriptions );
    } , []) ; 

   

    const totalAmount = () => {
        let amount=0 ; 
        allChoosenServicess.forEach((item) => {
            amount += item.price*item.value; 
        }); 
        return amount ; 
    }

    return(
        <CommonLayout  catalog={catalog}>
            <Container>
                <Paper elevation={2} className={styles.papper}>
                    <Grid container spacing={2} pl={2} pr={2} pb={1} pt={1}>
                        <Grid item xs={12} mb={3}>
                            <div className={styles.addLinkContainer} >
                                <DesktopTablet>
                                    <Image src="/cardImg.png" width={70} height={70} alt="subscription product image"/>
                                </DesktopTablet>
                                <div>
                                    <h1>{data.title}: укажите ссылку на страницу</h1>
                                    <div className={styles.addlinkInputContainer}>
                                        <div className={styles.iconCon} >
                                            <LinkIcon/>
                                        </div>
                                        <input
                                        tyope="url"
                                        placeholder="https://"
                                        value={url} 
                                        onChange={(e) => {
                                            setUrl(e.target.value) ; 
                                        }}
                                        />
                                    </div>
                                </div>

                            </div>
                        </Grid>
                        {
                            subscriptions?.promotionMethod?
                            <Grid item xs={12} mb={3}>
                                <div className={styles.container}>
                                    <div className={styles.subTitlesContainer}>
                                        <h2>PROMOTION METHOD</h2>
                                    </div>
                                    <div  className={styles.promoContainer}>
                                        <div>
                                            <VerifiedIcon />
                                        </div>
                                        <div>
                                            <p  className={styles.description}>{subscriptions?.promotionMethod}</p>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            :
                            null
                        }

                                                
                         {/* <Grid item xs={12} mb={3}>
                             <div className={styles.container}>
                                 <div className={styles.subTitlesContainer}>
                                     <h2>SUBSCRIPTION SETTINGS</h2>
                                 </div>
                                 <div className={styles.settingContainer}>
                                     <Grid container spacing={2}>
                                         <Grid item  xs={12} sm={12} md={4}  mt={1} >
                                             <AddRemoveComponent
                                            //   componentStyle={{width:"90%"}}
                                             />
                                         </Grid>
                                         <Grid item xs={12} sm={12} md={4}  mt={1} >
                                             <AddRemoveComponent
                                            //   componentStyle={{width:"90%"}}
                                             select={true}
                                             />
                                         </Grid>
                                     </Grid>
                                 </div>
                             </div>
                         </Grid> */}

                        {
                            subscriptions?.servicess?.length ? 
                            subscriptions?.servicess?.map(
                                (item , index) =>{
                                return( 
                                <Grid key={index} item xs={12} mb={3}>
                                    <div className={styles.container}>
                                        <div className={styles.subTitlesContainer}>
                                            <h2>{item?.service_title}:</h2>
                                        </div>
                                        <div className={styles.settingContainer}>
                                            <Grid container spacing={2}>
                                                {
                                                    item?.service_values.length? 
                                                    item?.service_values.map((item, index) => {
                                                        return (
                                                            <Grid key={index} item  xs={12} sm={12} md={4} mt={1} mb={1}>
                                                                <AddRemoveComponent
                                                                id={item._id}
                                                                data={item}
                                                                price={true}
                                                                allChoosens={allChoosenServicess}
                                                                setAllChoosens={(value) => setAllChoosenServicess(value)}
                                                                />
                                                            </Grid>
                                                        )
                                                    })
                                                    :null
                                                }
                                            </Grid>
                                        </div>
                                    </div>
                                </Grid>
                            )})  
                        :null
                        }

                        <Grid item xs={12}>
                            <div  className={styles.promoContainer}>
                                <div>
                                    <VerifiedIcon />
                                </div>
                                <div>
                                    <p  className={styles.description}> As soon as you add a new post to your Instagram account, our online subscription system will automatically launch an advertising campaign for promotion, taking into account the settings below. Subscribing will increase your reach and help you get recommended!</p>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} >
                            <SelectPaymantMethod
                            disableShadow={true}
                            componentStyle={{
                                padding: 0 , 
                                marginTop: 0 , 
                                marginBottom: 0 , 
                             }}
                            accordionDetailMarginTop={2}
                            paddingLeft={"0px !important"}
                            title={true}
                            />
                        </Grid>

                        <Grid item xs={12} >
                            <div className={styles.addlinkInputContainer}>
                                <div className={styles.iconCon} >
                                    <AlternateEmailIcon/>
                                </div>
                                <input
                                tyope="email"
                                placeholder="Your email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} >
                            <div className={styles.buttonContainer}>
                                <p>Amount payable:  <span>{totalAmount()} ₼</span></p>
                                <Link href="/" >
                                    <a className={styles.subscribe}>
                                        Subscribe
                                    </a>
                                </Link>
                            </div>
                        </Grid>

                    </Grid>
                </Paper>
            </Container>
        </CommonLayout>
    )
}


SubscriptionDetails.getInitialProps = async (ctx) => {
    const id =  ctx.query.id ; 
    // this request have to be each page 
    const catalogData =  await getCatalogData() ; 
    const catalog =  catalogData.data ;
    // *********************** 

    const subscriptionsBody =  {
        id, 
    }
    let subscriptionsById =  await getSubscriptionsByIdApi(subscriptionsBody); 

  
    return {
        // props: {
            id ,  
            catalog , 
            data: subscriptionsById , 
        // }
    };
}


export default SubscriptionDetails ; 