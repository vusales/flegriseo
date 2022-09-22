import { getRequest } from "../utils/httpUtils";


export const getHomePageData = async () => {
    const result = await getRequest("/home/home"); 
    return result;  
}



