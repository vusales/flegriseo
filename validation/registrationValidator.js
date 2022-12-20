import * as yup from 'yup';

const  RegistrationValidation = yup.object().shape({
    phone: yup.string().required("Əlaqə nömrəsi düzgün daxil edilməyib!").length(9, "Əlaqə nömrəsi düzgün daxil edilməyib!") ,
    // .matches( /^\d+$/ , "Yalnız rəqəm daxil edilməlidir!")
    password: yup.string().matches( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-zA-Z0-9]).{8,}$/gm , "Şifrə minimum 8 hərf və rəqəmdən və bir böyük hərfdən ibarət olmalıdır!").required("Şifrə düzgün daxil edilməyib!") ,
    repeatPassword: yup.string().matches( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-zA-Z0-9]).{8,}$/gm , "Şifrə minimum 8 hərf və rəqəmdən və bir böyük hərfdən ibarət olmalıdır!").required("Şifrə düzgün daxil edilməyib!") ,
    name: yup.string().required(""),
    surname: yup.string().required(""), 
    email: yup.string().email("Düzgün e-poçt daxil edin!").required("E-poçt daxil edin!"),
}); 

export default RegistrationValidation;