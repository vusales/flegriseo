import { getRequest , postRequest } from "../utils/httpUtils";

export const login = async (body) => {
    try {
        console.log("LOGIN") ; 
        const result =  await postRequest("/auth/login" , body ); 
        console.log("result" , result );
        if(result.result) {
            let token =  JSON.stringify(result?.auth_token) ; 
            localStorage.setItem("WWW_FLESMO_AUTH" , token) ; 
        }
        return result ; 
    }catch(err){
        console.log("login Error");
    }
}

export const getAuthToken = async () => {
    try {
        let token ; 
        token  = await JSON.parse(localStorage.getItem("WWW_FLESMO_AUTH")); 
        if(token) {
            return token ; 
        }else {
            return false ; 
        }
    }catch(err) {
        console.log("err" ,  err );
    }
}


export const signOut = async (body) => {
    try {
        const result =  await postRequest("/auth/signOut" , body ); 

        console.log(result) ; 

        if(result.result) {
            localStorage.removeItem("WWW_FLESMO_AUTH"); 
        }

    }catch(err) {
        console.log("err" , err); 
    }
}




