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
    const result = await postRequest(`/products/filter?subCategoryId=${parametr.subCategoryId || "" }&categoryId=${parametr.categoryId || ""}`); 
    return result;
}

export const getSpecialProducts =  async ( pagination ) => {
    const result =  await postRequest("/products/specialProducts") ; 
    return result?.specaialProducts ; 
}


export const searchApi =  async ( body ) => {
    try{
        const result =  await postRequest("/products/search" , body ) ; 
        return result.data; 

    }catch(err){
        console.log("err" ,  err );
    }
    
}