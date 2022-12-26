import axios from "axios";
import {BASE_URL} from "./constants"; 


const handleError = (error) => {
  const { response } = error;
  let errorResponse = null;
  if (
    response &&
    response.data &&
    response.data.errors &&
    response.data.errors.length
  ) {
    errorResponse = response.data.errors[0];
  }
  return null;
};

const getTokens = (response) => {
  localStorage.removeItem("header");
  let data = {
    'x-w-t-access-token': response.headers["x-w-t-access-token"],
    "x-w-t-refresh-token": response.headers["x-w-t-refresh-token"],
  }
  localStorage.setItem("header", JSON.stringify(data));
}

const makeRequest = async (uri, methodFn, body, toast) => { // toast varibale is a workaround for showing toasts when logging and registering, it should //!NOT BE USER in any other place. 
  // toast deyiseni login ve register sehifelerinde toastlari gostermek ucun istifade olunan alternativdir ve hec bir yerde istifade //!OLUNMAMALIDIR
  const URL = `${BASE_URL}${uri}`;
  let response = null;
  try {
    response = await methodFn(URL, body);
    if(response.headers["x-w-t-access-token"]){
     getTokens(response); 
    }
  } catch (error) {
    handleError(error);

    if ([401, 409, 500].includes(error?.response?.status) && toast) {
      return error
    }
  }
  return response ? response.data : null;
};

export const getRequest = async (uri) => {
  const responseData = await makeRequest(uri, axios.get);
  return responseData;
};

export const postRequest = async (uri, body, toast) => {
  // toast varibale is a workaround for showing toasts when logging and registering, it should //! NOT BE USED in any other place. 
  // toast deyiseni login ve register sehifelerinde toastlari gostermek ucun istifade olunan alternativdir ve hec bir yerde istifade //! OLURNAMALIDIR
  const responseData = await makeRequest(uri, axios.post, body, toast);
  return responseData;
};

export const deleteRequest = async (uri, body) => {
  const responseData = await makeRequest(uri, axios.delete, body);
  return responseData;
};


// when needs send acces and refresh tokens 
export const requestsAuth = async (uri, method, body) => {
  let tokenString = localStorage.getItem("header");
  let tokens = JSON.parse(tokenString);
  // if (method === "delete") debugger
  const headers = {
    "Accept": 'application/json',
    'Content-Type': 'application/json charset=utf-8',
    'x-w-t-access-token': tokens["x-w-t-access-token"],
    "x-w-t-refresh-token": tokens["x-w-t-refresh-token"],
    'Access-Control-Allow-Headers': 'X-Requested-With'
  };
  const responseData = await makeRequest(uri, axios.create({
    baseURL: BASE_URL,
    headers,
  })[method], body);
  return responseData;
};

// when needs send image or file 
export const requestFormData = async (uri, method, body) => {
  const headers = {
    "Content-type": "multipart/form-data",
  };
  const responseData = await makeRequest(uri, axios.create({
    baseURL: BASE_URL,
    headers,
  })[method], body);
  return responseData;
};








