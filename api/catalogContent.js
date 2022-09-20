import { getRequest } from "../utils/httpUtils";

export const getCatalogData = async () => {
    const result = await getRequest("/catalog"); 
    console.log("result" , result); 
    return result;  
}
