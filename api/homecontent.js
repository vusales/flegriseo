import { CatchingPokemon } from "@mui/icons-material";
import { getRequest , postRequest  } from "../utils/httpUtils";


export const getHomePageData = async () => {
    const result = await getRequest("/home/home"); 
    return result;  
}

export const getPagesBanner = async () => {
    const result = await getRequest("/home/pages"); 
    return result?.data ;  
}

export const getSubscriptionsByIdApi = async (body) => {
    try {

        const result = await postRequest("/home/subscriptions" , body );
        if(result) {
            return result.data;  
        }else {
            return false ; 
        }
    }catch(err) {
        if(err) return console.log("err"  , err ) ; 
    }
}





