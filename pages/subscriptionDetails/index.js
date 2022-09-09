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


const SubscriptionDetails = () => {
    return(
        <CommonLayout>
            <Container>
                <Paper elevation={2} className={styles.papper}>
                    <Grid container spacing={2} >
                        <Grid item xs={12} mb={3}>
                            <div className={styles.addLinkContainer} >
                                <Image src="/cardImg.png" width={70} height={70} alt="subscription product image"/>
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
                                    <Grid container >
                                        <Grid item  xs={4}  mt={1} >
                                            <AddRemoveComponent
                                            componentStyle={{width:"90%"}}
                                            />
                                        </Grid>
                                        <Grid item xs={4}  mt={1} >
                                            <AddRemoveComponent
                                            componentStyle={{width:"90%"}}
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
                                    <Grid container >
                                        <Grid item  xs={4}  mt={1} mb={1}>
                                            <AddRemoveComponent
                                            componentStyle={{width:"90%"}}
                                            price={true}
                                            />
                                        </Grid>
                                        <Grid item  xs={4}  mt={1}  mb={1}>
                                            <AddRemoveComponent
                                            componentStyle={{width:"90%"}}
                                            price={true}
                                            />
                                        </Grid>
                                        <Grid item  xs={4}  mt={1}  mb={1}>
                                            <AddRemoveComponent
                                            componentStyle={{width:"90%"}}
                                            price={true}
                                            />
                                        </Grid>
                                        <Grid item  xs={4}  mt={1}  mb={1}>
                                            <AddRemoveComponent
                                            componentStyle={{width:"90%"}}
                                            price={true}
                                            />
                                        </Grid>
                                        <Grid item  xs={4}  mt={1}  mb={1} >
                                            <AddRemoveComponent
                                            componentStyle={{width:"90%"}}
                                            price={true}
                                            />
                                        </Grid>
                                        <Grid item  xs={4}  mt={1}  mb={1}>
                                            <AddRemoveComponent
                                            componentStyle={{width:"90%"}}
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
                                    <Grid container >
                                        <Grid item  xs={4}  mt={1} >
                                            <AddRemoveComponent
                                            componentStyle={{width:"90%"}}
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

                        <Grid item xs={12}>
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


                    </Grid>
                </Paper>
            </Container>
        </CommonLayout>
    )
}


export default SubscriptionDetails ; 