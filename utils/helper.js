// this url ends with api , it gives error while getting image
// import {BASE_URL} from "./constants"; 


let BASE_URL  =  "http://localhost:3002/" ; 

export const makeImageUrl =  (src) => {
    return `${BASE_URL}images${src}` 
}