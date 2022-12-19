import React ,  
{
    useState , 
}from "react" ; 
import styles from "./index.module.scss";
import Image from 'next/image';
import blankImage from "../../public/blanks/noDataFound.png"; 



const Blanks = ({
    title ,  
    description ,  
    image ,
}) => {



    return (
        <div className={styles.blanksContainer }> 
            <Image
            src={image??blankImage}
            alt="picture of blanks"
            width={150}
            height={150}
            />
            {
                title ? 
                <p className={styles.blankTitle}>{title}</p>
                :null
            }
        </div>
    )
}

export default Blanks; 