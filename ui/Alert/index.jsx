import React , {useEffect} from 'react';
import styles from "./index.module.scss";

const Alert = ({ message , type ,  callback }) => {

  let typeStyle; 
  let backgroundColor ; 


  useEffect(()=>{
      setTimeout(()=>callback(false) , 3000);
  }, []);


  switch (type) {
    case "error":
        backgroundColor = "red"; 
        break;
    case "success":
        backgroundColor = "green"; 
        break;
    case "warning":
      backgroundColor = "orange"; 
        break;
    default: backgroundColor = "#8f95a0" ;
        break;
  }

  return (
      <div className={styles.snackBarSuccess} style={{backgroundColor: backgroundColor }}>
        <span>{message}</span>
      </div>
  );
};

export default Alert;