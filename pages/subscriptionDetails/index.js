import React from "react" ;
import styles from "./index.module.scss";
import CommonLayout from "../../layout/commonLayout";
import { Container , Grid, Paper } from "@mui/material";
import Image from "next/image";
import LinkIcon from '@mui/icons-material/Link';
import VerifiedIcon from '@mui/icons-material/Verified';
import AddRemoveComponent from "../../components/AddRemoveComponent";
import SelectComponent from "../../components/SelectComponent";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SelectPaymantMethod from "../../components/SelectPaymantMethod"; 
import Link from "next/link";
import { Desktop , DesktopTablet } from "../../ui/Breakpoints";


const SubscriptionDetails = () => {
    return(
        <CommonLayout>
            <Container>
                <Paper elevation={2} className={styles.papper}>
                    <Grid container spacing={2} pl={2} pr={2} pb={1} pt={1}>
                        <Grid item xs={12} mb={3}>
                            <div className={styles.addLinkContainer} >
                                <DesktopTablet>
                                    <Image src="/cardImg.png" width={70} height={70} alt="subscription product image"/>
                                </DesktopTablet>
                                <div>
                                    <h1>Инстаграм: укажите ссылку на страницу</h1>

                                    <div className={styles.addlinkInputContainer}>
                                        <div className={styles.iconCon} >
                                            <LinkIcon/>
                                        </div>
                                        <input
                                        tyope="url"
                                        placeholder="https://"
                                        />
                                    </div>
                                </div>

                            </div>
                        </Grid>
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
                                        <p  className={styles.description}> As soon as you add a new post to your Instagram account, our online subscription system will automatically launch an advertising campaign for promotion, taking into account the settings below. Subscribing will increase your reach and help you get recommended! After the publication of a new post, the addition of views, likes, saves and writing thematic comments from users with an avatar from Russia and Russian-speaking CIS countries will automatically begin.</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} mb={3}>
                            <div className={styles.container}>
                                <div className={styles.subTitlesContainer}>
                                    <h2>SUBSCRIPTION SETTINGS</h2>
                                </div>
                                <div className={styles.settingContainer}>
                                    <Grid container spacing={2}>
                                        <Grid item  xs={12} sm={12} md={4}  mt={1} >
                                            <AddRemoveComponent
                                            // componentStyle={{width:"90%"}}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}  mt={1} >
                                            <AddRemoveComponent
                                            // componentStyle={{width:"90%"}}
                                            select={true}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} mb={3}>
                            <div className={styles.container}>
                                <div className={styles.subTitlesContainer}>
                                    <h2>FOR EACH NEW POST:</h2>
                                </div>
                                <div className={styles.settingContainer}>
                                    <Grid container spacing={2}>
                                        <Grid item  xs={12} sm={12} md={4} mt={1} mb={1}>
                                            <AddRemoveComponent
                                            // componentStyle={{width:"90%"}}
                                            price={true}
                                            />
                                        </Grid>
                                        <Grid item  xs={12} sm={12} md={4}  mt={1}  mb={1}>
                                            <AddRemoveComponent
                                            // componentStyle={{width:"90%"}}
                                            price={true}
                                            />
                                        </Grid>
                                        <Grid item  xs={12} sm={12} md={4}  mt={1}  mb={1}>
                                            <AddRemoveComponent
                                            // componentStyle={{width:"90%"}}
                                            price={true}
                                            />
                                        </Grid>
                                        <Grid item  xs={12} sm={12} md={4}  mt={1}  mb={1}>
                                            <AddRemoveComponent
                                            // componentStyle={{width:"90%"}}
                                            price={true}
                                            />
                                        </Grid>
                                        <Grid item  xs={12} sm={12} md={4}  mt={1}  mb={1} >
                                            <AddRemoveComponent
                                            // componentStyle={{width:"90%"}}
                                            price={true}
                                            />
                                        </Grid>
                                        <Grid item  xs={12} sm={12} md={4}  mt={1}  mb={1}>
                                            <AddRemoveComponent
                                            // componentStyle={{width:"90%"}}
                                            price={true}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} mb={3}>
                            <div className={styles.container}>
                                <div className={styles.subTitlesContainer}>
                                    <h2>PER PERIOD PER PAGE:</h2>
                                </div>
                                <div className={styles.settingContainer}>
                                    <Grid container spacing={2}>
                                        <Grid item  xs={12} sm={12} md={4}  mt={1} >
                                            <AddRemoveComponent
                                            // componentStyle={{width:"90%"}}
                                            price={true}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </Grid>

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
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} >
                            <div className={styles.buttonContainer}>
                                <p>Amount payable <span>100 ₼</span></p>
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


export default SubscriptionDetails ; 