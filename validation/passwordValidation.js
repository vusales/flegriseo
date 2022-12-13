import * as yup from 'yup';

const PasswordValidation = yup.object().shape({
    newpassword: yup.string().matches( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-zA-Z0-9]).{8,}$/gm , "Şifrə minimum 8 hərf və rəqəmdən və bir böyük hərfdən ibarət olmalıdır!").required("Şifrə düzgün daxil edilməyib!") , 
    password: yup.string().matches( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-zA-Z0-9]).{8,}$/gm , "Şifrə minimum 8 hərf və rəqəmdən və bir böyük hərfdən ibarət olmalıdır!").required("Şifrə düzgün daxil edilməyib!") , 
}) ; 


export default PasswordValidation;