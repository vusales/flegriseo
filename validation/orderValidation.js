import * as yup from 'yup';

const  OrderValidator = yup.object().shape({
    url_link: yup.string().required() , 
    quantity: yup.string().required() , 
    price: yup.string().required() , 
    email: yup.string().email("Düzgün e-poçt daxil edin!").required("E-poçt daxil edin!") ,
    service_name: yup.string().required() , 
    subscription_period: yup.string().required(), 
    token: yup.string().required(),
    phone: yup.string().matches( /^\d+$/ , "Yalnız rəqəm daxil edilməlidir!").length(9 , "Əlaqə nömrəsi düzgün daxil edilməyib!"),
}); 

export default OrderValidator; 


