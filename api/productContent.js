import { getRequest , postRequest } from "../utils/httpUtils";


export const getProducts = async () => {
    const result =  await getRequest("/products"); 
    console.log("result " ,  result );
    return result;
} 