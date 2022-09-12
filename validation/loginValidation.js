import * as yup from 'yup';

const  LoginValidator = yup.object().shape({
    phone: yup.string().matches( /^\d+$/ , "Yalnız rəqəm daxil edilməlidir!").required("Əlaqə nömrəsi düzgün daxil edilməyib!").length(10 , "Əlaqə nömrəsi düzgün daxil edilməyib!") ,
    password: yup.string().matches( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-zA-Z0-9]).{8,}$/gm , "Şifrə minimum 8 hərf və rəqəmdən və bir böyük hərfdən ibarət olmalıdır!").required("Şifrə düzgün daxil edilməyib!") , 
}) ; 


export default LoginValidator;
