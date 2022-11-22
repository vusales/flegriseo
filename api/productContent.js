import { getRequest , postRequest } from "../utils/httpUtils";


export const getProducts = async () => {
    const result =  await getRequest("/products"); 
    return result;
} 

export const getProductById = async  (id) => {
    const result = await postRequest("/products/productById" , {"id" : id}); 
    return result;
}

export const filter = async (parametr) => {
    console.log("parametr" ,  parametr ) ; 
    const result = await postRequest(`/products/filter?subCategoryId=${parametr.subCategoryId || "" }&category=${parametr.category || ""}`); 
    console.log(" filter result" ,  result ) ;
    return result;
}