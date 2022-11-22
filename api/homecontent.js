import { getRequest } from "../utils/httpUtils";


export const getHomePageData = async () => {
    const result = await getRequest("/home/home"); 
    return result;  
}

export const getPagesBanner = async () => {
    const result = await getRequest("/home/pages"); 
    return result?.data ;  
}





