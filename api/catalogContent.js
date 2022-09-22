import { getRequest } from "../utils/httpUtils";

export const getCatalogData = async () => {
    const result = await getRequest("/catalog"); 
    return result;  
}
