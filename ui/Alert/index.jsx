import React , {useEffect} from 'react';
import styles from "./index.module.scss";
import CloseIcon from '@mui/icons-material/Close';

const Alert = ({ message , type ,  callback , show }) => {

  let typeStyle; 
  let backgroundColor ; 


  useEffect(()=>{
      setTimeout(()=>callback(false) , 3000);
  }, [show]);


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
  <div>
    { show ? 
      <div className={styles.snackBarSuccess} style={{backgroundColor: backgroundColor }}>
        <span>{message}</span>
        <div onClick={()=>callback(false)}>
          <CloseIcon />
        </div>
      </div>
      :null
    }
  </div>
      
  );
};

export default Alert;