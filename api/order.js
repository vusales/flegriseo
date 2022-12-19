import { getRequest , postRequest } from "../utils/httpUtils";


export const orderApi  =  async (body) => {
    try {

        let result =  await postRequest("/order" ,  body ); 
        console.log("result" ,  result) ; 
        return result;  
    } catch (error) {
        console.log("order error" , error ) ; 
        
    }

}