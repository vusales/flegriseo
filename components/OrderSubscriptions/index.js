import React , {
    useState, 
    useEffect ,
} from "react"
import styles from "./index.module.scss";
import { Grid , Checkbox } from "@mui/material";
import SingleSubscription from "../SingleSubscription";

const label = { inputProps: { 'aria-label': 'Agreement' } }

const demosubscription =[
    {
        id:"1a" , 
        title: "Single subscription" , 
        bonus: "" , 
    }, 
    {
        id:"1b" , 
        title: "Every 7 days" , 
        bonus: "Renderin with 10% bonus" , 
    }, 
    {
        id:"2b" , 
        title: "Every 7 days" , 
        bonus: "Renderin with 10% bonus"  , 
    }, 
    {
        id:"3b" , 
        title: "Every 7 days" , 
        bonus: "Renderin with 10% bonus"  , 
    }, 
];


const OrderSubscriptions  = ({callBackFunction}) => {

    const [chooseSubscriptionMethod ,  setChooseSubscriptionMethod ] = useState(""); 
    const [agreement , setAgreement ] = useState(false) ; 

    useEffect(()=> {
        callBackFunction({
            subscription_period:chooseSubscriptionMethod ,
            agreement: agreement , 
        }); 
    }, [chooseSubscriptionMethod , agreement ]);

    return (
        <Grid item xs={12}> 
            <Grid container >
                <Grid item xs={12} mb={2} className={styles.border}>
                    <p className={styles.titles}>SUBSCRIPTION</p>
                </Grid>
                {
                    demosubscription.map((item, index)=> (
                    <Grid key={`${index}-ordsub`} item xs={12} sm={6} md={3} justifyContent="center" alignItems="center" >
                        <SingleSubscription 
                        data={item} 
                        choosen={chooseSubscriptionMethod}
                        setChoosen={(value)=>setChooseSubscriptionMethod(value)}
                        />
                    </Grid>
                ))}
               
                <Grid item xs={12} pb={2} pt={2}>
                    <div className={styles.agreementCon}> 
                        <Checkbox 
                        className={styles.checkbox}
                        {...label} 
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                        checked={agreement}
                        onChange={() => setAgreement(!agreement)}
                        />
                        <p>I agree to the Subscription Recurring Payment Rules and Automatic Charge Rules</p>
                    </div>
                </Grid>
            </Grid> 
        </Grid>
    )
}

export default OrderSubscriptions;