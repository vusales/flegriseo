import { getRequest , postRequest } from "../utils/httpUtils";

export const login = async (body) => {
    try {
        const result =  await postRequest("/auth/login" , body ); 
        if(result.result) {
            let token =  JSON.stringify(result?.auth_token) ; 
            localStorage.setItem("WWW_FLESMO_AUTH" , token) ; 
        }
        return result ; 
    }catch(err){
        console.log("login Error");
    }
}

export const signUpApi = async (body) => {
    try {
        const result =  await postRequest("/auth/register" , body ); 
        if(result){
            return result?.result ; 
        }else {
            return false ; 
        }
    }catch(err){
        if(err) {
            console.log("SignUp error" , err) ; 
        }
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

        if(result.result) {
            localStorage.removeItem("WWW_FLESMO_AUTH"); 
        }

    }catch(err) {
        console.log("err" , err); 
    }
}


export const checkEmailApi =  async (body) => {
    try{
        let request =  {
            ...body , 
        }
        const result =  await postRequest("/auth/checkEmail" , request ); 
        return result.result ; 
    }catch(err) {
        console.log("err" , err);
    }
}

export const verifyCodeApi = async (body) => {
    try {
        const result =  await postRequest("/auth/codeVerify" , body ); 
        return result.result ; 
    }catch(err) {
        console.log("error" ,  err );
    }

}


export const changePasswordApi = async (body) => {
    try {
        const result =  await postRequest("/auth/newPassword" , body ); 
        return result.result ; 
    }catch(err) {
        console.log("error" ,  err );
    }

}




