import { getRequest } from "../utils/httpUtils";


export const getHomePageData = async () => {
    console.log("get")
    const result = await getRequest("/home/home"); 
    console.log("result" , result); 
    return result;  
}



