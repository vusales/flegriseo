import * as yup from 'yup';

const  SubscriptionValidator = yup.object().shape({
    url_link: yup.string().required() , 
    email: yup.string().email("Düzgün e-poçt daxil edin!").required("E-poçt daxil edin!") ,
    token: yup.string().required(),
}); 

export default SubscriptionValidator;