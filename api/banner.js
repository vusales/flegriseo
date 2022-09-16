import { getRequest } from "../utils/httpUtils";


export const getBannerData = async () => {
    console.log("get")
    const result = await getRequest("/home/banner"); 
    console.log("result" , result); 
    return result;  
}