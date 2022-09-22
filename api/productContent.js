import { getRequest , postRequest } from "../utils/httpUtils";


export const getProducts = async () => {
    const result =  await getRequest("/products"); 
    return result;
} 

export const getProductById = async  (id) => {
    const result = await postRequest("/products/productById" , {"id" : id}); 
    console.log("result" ,  result ) ;
    return result;
}